package com.onclave.iris;

import android.app.Fragment;
import android.app.FragmentTransaction;
import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.view.View;
import android.support.design.widget.NavigationView;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Toast;

public class Iris extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener {

    private int menuID = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_iris);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.setDrawerListener(toggle);
        toggle.syncState();

        NavigationView navigationView = (NavigationView) findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(this);

        if(savedInstanceState != null) {
            menuID = savedInstanceState.getInt("menuID");
        }

        checkMenuID(menuID);


    }

    public void checkMenuID(int id) {
        if(id == 0) {
            swapFragments(new HomeFragment(), "HOME");
        }
        else {
            onItemForFragmentSelected(menuID);
        }
    }

    public void swapFragments(Fragment fragment, String TAG) {
        Fragment savedFragment = null;
        if(fragment != null) {
            savedFragment = getFragmentManager().findFragmentByTag(TAG);
            FragmentTransaction ft = getFragmentManager().beginTransaction();

            if(savedFragment != null) {
                ft.replace(R.id.content_frame, savedFragment, TAG);
            }
            else {
                ft.replace(R.id.content_frame, fragment, TAG);
            }

            ft.addToBackStack(null);
            ft.setTransition(FragmentTransaction.TRANSIT_FRAGMENT_FADE);
            ft.commit();
        }
        else {
            Snackbar.make(findViewById(R.id.drawer_layout),"Fragment not initiated", Snackbar.LENGTH_LONG).show();
        }
    }

    @Override
    public void onBackPressed() {
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.iris, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @SuppressWarnings("StatementWithEmptyBody")
    @Override
    public boolean onNavigationItemSelected(MenuItem item) {

        // Handle navigation view item clicks here.
        menuID = item.getItemId();

        onItemForFragmentSelected(menuID);
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);
        return true;
    }

    public void onItemForFragmentSelected(int id) {
        Fragment fragment = null;
        String TAG = "HOME";

        if (id == R.id.nav_home) {
            // Handle the home action
            TAG = "HOME";
            fragment = new HomeFragment();
        } else if(id == R.id.nav_settings) {
            //Handle the setting action here
            TAG = "SETTINGS";
            fragment = new SettingsFragment();
        } else if(id == R.id.nav_website) {
            //Handle the website action here
            if(isInternetOn()) {
                TAG = "WEBSITE";
                fragment = new WebsiteFragment();
            }
        } else {
            TAG = "HOME";
            fragment = new HomeFragment();
        }

        swapFragments(fragment, TAG);
    }

    @Override
    public void onSaveInstanceState(Bundle savedInstanceState) {
        super.onSaveInstanceState(savedInstanceState);
        savedInstanceState.putInt("menuID", menuID);
    }

    public boolean isInternetOn() {
        ConnectivityManager cm = (ConnectivityManager)getBaseContext().getSystemService(Context.CONNECTIVITY_SERVICE);

        NetworkInfo activeNetwork = cm.getActiveNetworkInfo();
        boolean isConnected = activeNetwork != null && activeNetwork.isConnectedOrConnecting();

        if(!isConnected) {
            Snackbar.make(findViewById(R.id.content_frame), R.string.no_internet_connectivity, Snackbar.LENGTH_INDEFINITE).show();
        }

        return isConnected;
    }

    public void syncIris(View view) {
        Toast.makeText(getBaseContext(), "button", Toast.LENGTH_LONG).show();
    }
}
