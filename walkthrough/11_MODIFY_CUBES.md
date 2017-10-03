# 11. Modify Cubes
We will add a script to the cube in order to destroy it after 10 seconds.

* Create a new C# script with filename `CubeBehaviour.cs` and insert the following code:

```c
using UnityEngine;
using System.Collections;

public class CubeBehaviour : MonoBehaviour {

    public float lifeTime;

    // Use this for initialization
    void Start () {
        Object.Destroy (gameObject, lifeTime);
    }
    
    // Update is called once per frame
    void Update () {
    
    }
}
```

* Add the script to the `Cube` prefab:

![Screenshot](img/modify_cubes_1.png)

* Set the public variable `Life Time` to 10:

![Screenshot](img/modify_cubes_2.png)

* Press the play button and test the preview:

![Screenshot](img/modify_cubes_3.png)
