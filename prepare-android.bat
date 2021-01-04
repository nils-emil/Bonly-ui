cd C:\Users\Nils\Projects\Bonly-ui\android\app\build\outputs\apk\release

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore C:\Users\Nils\Projects\Bonly-ui\my-release-key.keystore app-release-unsigned.apk alias_name

del BonlyBeta.apk

C:\Users\Nils\AppData\Local\Android\Sdk\build-tools\30.0.3\zipalign.exe  -v 4 app-release-unsigned.apk BonlyBeta.apk

cd C:\Users\Nils\Projects\Bonly-ui
