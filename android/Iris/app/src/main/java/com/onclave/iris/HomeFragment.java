package com.onclave.iris;

import android.app.ProgressDialog;
import android.content.Context;
import android.net.Uri;
import android.os.Bundle;
import android.app.Fragment;
import android.support.design.widget.Snackbar;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.CompoundButton;
import android.widget.Switch;
import android.widget.Toast;
import android.widget.ToggleButton;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;
import org.json.JSONObject;

public class HomeFragment extends Fragment {

    private ProgressDialog progressDialog;

    private boolean s1state = false;
    private boolean s2state = false;
    private boolean s3state = false;
    private boolean s4state = false;

    private String domain = "http://10.0.2.2/iris/php";

    private String s1on = domain + "/control.php?switch_one=ON";
    private String s1off = domain + "/control.php?switch_one=OFF";
    private String s2on = domain + "/control.php?switch_two=ON";
    private String s2off = domain + "/control.php?switch_two=OFF";
    private String s3on = domain + "/control.php?switch_three=ON";
    private String s3off = domain + "/control.php?switch_three=OFF";
    private String s4on = domain + "/control.php?switch_four=ON";
    private String s4off = domain + "/control.php?switch_four=OFF";
    private String sync = domain + "/synchronize.php";

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View view = inflater.inflate(R.layout.fragment_home, container, false);

        final Switch switch1 = (Switch) view.findViewById(R.id.switch1);
        final Switch switch2 = (Switch) view.findViewById(R.id.switch2);
        final Switch switch3 = (Switch) view.findViewById(R.id.switch3);
        final Switch switch4 = (Switch) view.findViewById(R.id.switch4);

        switch1.setChecked(false);
        switch2.setChecked(false);
        switch3.setChecked(false);
        switch4.setChecked(false);

        switch1.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if(isChecked) {
                    showProgress();
                    registerAPIcall(s1on, switch1, R.id.switch1);
                } else {
                    showProgress();
                    registerAPIcall(s1off, switch1, R.id.switch1);
                }
            }
        });

        switch2.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if(isChecked) {
                    showProgress();
                    registerAPIcall(s2on, switch2, R.id.switch2);
                } else {
                    showProgress();
                    registerAPIcall(s2off, switch2, R.id.switch2);
                }
            }
        });

        switch3.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if(isChecked) {
                    showProgress();
                    registerAPIcall(s3on, switch3, R.id.switch3);
                } else {
                    showProgress();
                    registerAPIcall(s3off, switch3, R.id.switch3);
                }
            }
        });

        switch4.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if(isChecked) {
                    showProgress();
                    registerAPIcall(s4on, switch4, R.id.switch4);
                } else {
                    showProgress();
                    registerAPIcall(s4off, switch4, R.id.switch4);
                }
            }
        });

//        Thread thread = new Thread() {
//            @Override
//            public void run() {
//                try {
//                    while(getActivity() != null) {
//                        synchronizeAPI(switch1, switch2, switch3, switch4);
//                        sleep(1000);
//                    }
//                } catch(InterruptedException e) {
//                    e.printStackTrace();
//                }
//            }
//        };
//
//        thread.run();

        return view;
    }

    public void synchronizeAPI(final Switch s1, final Switch s2, final Switch s3, final Switch s4) {
        JsonObjectRequest jsonRequest = new JsonObjectRequest(Request.Method.GET,
                sync,
                null,
                new Response.Listener<JSONObject>(){
                    @Override
                    public void onResponse(JSONObject response) {
                        try {
                            boolean success = response.getBoolean("success");
                            boolean switchone = response.getBoolean("switchone");
                            boolean switchtwo = response.getBoolean("switchtwo");
                            boolean switchthree = response.getBoolean("switchthree");
                            boolean switchfour = response.getBoolean("switchfour");

                            toggleSwitch(s1, switchone);
                            toggleSwitch(s2, switchtwo);
                            toggleSwitch(s3, switchthree);
                            toggleSwitch(s4, switchfour);
                        } catch (JSONException e) {
                            e.printStackTrace();
                            Snackbar.make(getView(), "Could not parse sync Response", Snackbar.LENGTH_LONG).show();
                        }
                    }
                },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        error.printStackTrace();
                        Snackbar.make(getView(), "There was an error creating the sync request.", Snackbar.LENGTH_LONG).show();
                    }
                });
    }

    public void registerAPIcall(final String url, final Switch switchButton, final int id) {
        JsonObjectRequest jsonRequest = new JsonObjectRequest(Request.Method.GET,
                url,
                null,
                new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        try {
                            boolean success = response.getBoolean("success");
                            String message = response.getString("message");

                            if(progressDialog != null) {
                                progressDialog.dismiss();
                            }

                            if(success) {
                                inverseSwitchValue(switchButton, id);
                            } else {
                                toggleSwitch(switchButton, id);
                            }

                            Snackbar.make(getView(), message, Snackbar.LENGTH_LONG).show();
                        } catch (JSONException e) {
                            e.printStackTrace();
                            Snackbar.make(getView(), "Could not parse Response", Snackbar.LENGTH_LONG).show();
                        }
                    }
                },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        error.printStackTrace();
                        Snackbar.make(getView(), "There was an error creating the request.", Snackbar.LENGTH_LONG).show();
                    }
                });

        Volley.newRequestQueue(getActivity().getApplicationContext()).add(jsonRequest);
    }

    public void inverseSwitchValue(Switch switchButton, final int id) {
        if(id == R.id.switch1) {
            s1state = !s1state;
            toggleSwitch(switchButton, s1state);
        }

        if(id == R.id.switch2) {
            s2state = !s2state;
            toggleSwitch(switchButton, s2state);
        }

        if(id == R.id.switch3) {
            s3state = !s3state;
            toggleSwitch(switchButton, s3state);
        }

        if(id == R.id.switch4) {
            s4state = !s4state;
            toggleSwitch(switchButton, s4state);
        }
    }

    public void toggleSwitch(Switch switchButton, int id) {
        if(id == R.id.switch1) {
            toggleSwitch(switchButton, s1state);
        }

        if(id == R.id.switch2) {
            toggleSwitch(switchButton, s2state);
        }

        if(id == R.id.switch3) {
            toggleSwitch(switchButton, s3state);
        }

        if(id == R.id.switch4) {
            toggleSwitch(switchButton, s4state);
        }
    }

    public void toggleSwitch(Switch switchButton, boolean state) {
        switchButton.setChecked(state);
    }

    public void showProgress() {
        progressDialog = new ProgressDialog(getActivity());
        progressDialog.setMessage("Please wait...");
        progressDialog.setIndeterminate(false);
        progressDialog.setCancelable(false);
        progressDialog.show();
    }
}