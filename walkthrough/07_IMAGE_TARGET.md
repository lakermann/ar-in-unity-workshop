# 7. Add Image Target

No let’s add an `image target` to the scene. Image targets represent images that the Vuforia SDK can detect and track. The SDK detects and tracks the features that are naturally found in the image itself by comparing these natural features against a known target resource database. Once the image target is detected, the SDK will track the image as long as it is at least partially in the camera’s field of view.

* We add an image target to the scene by dragging the prefab into the hierarchy:

![Screenshot](img/image_target_1.png)

* We configure the image target component by selecting the `Database` contains the trackable image target we are going to use:

![Screenshot](img/image_target_2.png)
