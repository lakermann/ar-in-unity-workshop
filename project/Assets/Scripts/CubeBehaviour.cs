using UnityEngine;
using System.Collections;

public class CubeBehaviour : MonoBehaviour {

	    public float lifeTime;

	    // Use this for initialization
	    void Start () {
		        Object.Destroy (gameObject, lifeTime);
		    }
	    
	    // Update is called once per frame
	    void Update () {
		    
		    }
}