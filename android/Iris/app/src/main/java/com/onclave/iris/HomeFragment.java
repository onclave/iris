package com.onclave.iris;

import android.app.ProgressDialog;
import android.content.Context;
import android.net.Uri;
import android.os.Bundle;
import android.app.Fragment;
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

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View view = inflater.inflate(R.layout.fragment_home, container, false);

        final Switch switch1 = (Switch) view.findViewById(R.id.switch1);
        Switch switch2 = (Switch) view.findViewById(R.id.switch2);
        Switch switch3 = (Switch) view.findViewById(R.id.switch3);
        Switch switch4 = (Switch) view.findViewById(R.id.switch4);

        switch1.setChecked(false);
        switch2.setChecked(false);
        switch3.setChecked(false);
        switch4.setChecked(false);

        switch1.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if(isChecked) {
                    progressDialog = new ProgressDialog(getActivity());
                    progressDialog.setMessage("Logging in. Please wait...");
                    progressDialog.setIndeterminate(false);
                    progressDialog.setCancelable(false);
                    progressDialog.show();
                    registerAPIcall("http://httpbin.org/get?site=code&network=tutsplus", switch1);
                } else {
                    Toast.makeText(getActivity().getApplicationContext(), "Switch One Off", Toast.LENGTH_SHORT).show();
                }
            }
        });

        switch2.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if(isChecked) {
                    Toast.makeText(getActivity().getApplicationContext(), "Switch Two On", Toast.LENGTH_SHORT).show();
                } else {
                    Toast.makeText(getActivity().getApplicationContext(), "Switch Two Off", Toast.LENGTH_SHORT).show();
                }
            }
        });

        switch3.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if(isChecked) {
                    Toast.makeText(getActivity().getApplicationContext(), "Switch Three On", Toast.LENGTH_SHORT).show();
                } else {
                    Toast.makeText(getActivity().getApplicationContext(), "Switch Three Off", Toast.LENGTH_SHORT).show();
                }
            }
        });

        switch4.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if(isChecked) {
                    Toast.makeText(getActivity().getApplicationContext(), "Switch Four On", Toast.LENGTH_SHORT).show();
                } else {
                    Toast.makeText(getActivity().getApplicationContext(), "Switch Four Off", Toast.LENGTH_SHORT).show();
                }
            }
        });

        return view;
    }

    public void registerAPIcall(final String url, final Switch switchButton) {
        JsonObjectRequest jsonRequest = new JsonObjectRequest(Request.Method.GET,
                url,
                null,
                new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        try {
//                            boolean success = response.getBoolean("success");
//                            String message = response.getString("message");
                            response = response.getJSONObject("args");
                            String site = response.getString("site");
                            progressDialog.dismiss();
                            Toast.makeText(getActivity().getApplicationContext(), site, Toast.LENGTH_LONG).show();
                            switchButton.setChecked(false);
                        } catch (JSONException e) {
                            //--handle exceptions here--
                            e.printStackTrace();
                        }
                    }
                },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        error.printStackTrace();
                    }
                });

        Volley.newRequestQueue(getActivity().getApplicationContext()).add(jsonRequest);
    }
}