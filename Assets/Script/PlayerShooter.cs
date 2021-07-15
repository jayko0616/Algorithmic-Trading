using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerShooter : MonoBehaviour
{

    public GameObject ArrowPrefab;
    private Vector3 direction;
    public Transform ShootingPlace;
    private Animator animator;

    private void Start()
    {
        animator = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.LeftShift))
        {
            animator.SetTrigger("Attack_wp");
            GameObject Arrow = Instantiate(ArrowPrefab, ShootingPlace.position,ShootingPlace.rotation);
            Arrow.name = "Arrow";
            Arrow.GetComponent<Arrow>().Init(transform.right,0.2f);
        }
    }
}
