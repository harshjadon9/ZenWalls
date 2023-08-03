package com.zenwalls;


import android.app.WallpaperManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Build;
import android.util.Base64;
import android.util.Log;


import java.io.IOException;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.facebook.react.bridge.Callback;

public class WallpaperMod extends ReactContextBaseJavaModule {
    ReactApplicationContext context;
    WallpaperMod(ReactApplicationContext context) {
        super(context);
        this.context = context;
    }

    @Override
    public String getName() {
        return "WallpaperMod";
    }

    @ReactMethod
    public void Print(String image64, Callback callBack) {
        Log.d("testing", "Print: a"+ image64);
        byte[] decodedString = Base64.decode(image64, Base64.DEFAULT);
        Bitmap bitmap = BitmapFactory.decodeByteArray(decodedString, 0, decodedString.length);
        WallpaperManager wallpaperManager = WallpaperManager.getInstance(context);
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                wallpaperManager.setBitmap(bitmap, null, false, WallpaperManager.FLAG_SYSTEM);
                Log.d("success", "hiiiiiii");
                callBack.invoke("done");
                return;
            }
        } catch (IOException e) {
            Log.d("errorrrrrr", "errrrorrr");
            throw new RuntimeException(e);
        }
    }
}