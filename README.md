#ad-oneframework v2.0
This is a port of the One Framework for use with AudiologyDesign websites.

Copy these files into your webroot folder and follow instructions below for basic setup. To see the stand alone version you can see it [here](http://staging.34one.com/one-framework) - will update this soon.

#Whats Different
1. All partials are now self-contained and are now fully customizable
2. REM to Pixel Conversion - e.g. *margin-top: rem(put pixel value); will convert to rem*
3. Updated to FontAwesome 4.4.0
4. Moved core framework defaults into *_defaults.scss* and removed *_variables.scss & _mixins.scss*
5. Created *NEW* One Framework Extensions, can be used to extend the core framework without effecting the framework itself
6. Removed need for *form elements* to have a class in order to be styled
7. Removed empty partials and overall cleanup

# Basic Setup
Just copy these files into *webroot* in your project folder and open *layout.scss* and start coding your app. From here you will be able to use any variable bound in the framework itself, as well as any functions. If you want to change any aspect of any partial, just open *site-settings* in the root of the oneframework directory and uncomment the lines you want to modify and it will override the default values defined in the partials themselves. This is also where you want to define your site branding as well.

# The JS
The JS for things like *dropdown menu*, *responsive menu*, *backtotopbutton*, and *fontresizer* are included in both the app.js and plugins.js. These must be defined in your assets.json file in order for these components to work on your site.

Also, there are 2 files in *Components* for tabs.js & accordion.js, just add these to your assets.json file as needed.
