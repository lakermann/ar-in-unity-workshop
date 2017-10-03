using UnityEngine;
using System.Collections;

public class SpawnerBehaviour : MonoBehaviour {

	public float spawnTime = 0.4f;        // How long between each spawn.
	public GameObject objectToSpawn;

	// Use this for initialization
	void Start () {
		// Call the Spawn function after a delay of the spawnTime and then continue to call after the same amount of time.
		InvokeRepeating ("Spawn", spawnTime, spawnTime);
	}

	void Spawn () {
		Instantiate (objectToSpawn, gameObject.transform.position, Random.rotation);
	}
}