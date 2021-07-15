using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Enemy_Distance : MonoBehaviour
{
    private float Distance;
    private GameObject Player;
    private ScrollingObject obj_1;
    private ScrollingObject obj_2;
    private Enemy_Control obj_3;
    private Animator animator;

    public GameObject Hp_bar;
    // Start is called before the first frame update
    private void Start()
    {
        Player = GameObject.Find("Player");
        obj_1 = GameObject.Find("BackGround_Sky").GetComponent<ScrollingObject>();
        obj_2 = GameObject.Find("Platform").GetComponent<ScrollingObject>();
        obj_3 = GameObject.Find("Enemy_Group").GetComponent<Enemy_Control>();
        animator = GetComponent<Animator>();
    }

    void Update()
    {
        Distance = Vector3.Distance(Player.transform.position, transform.position);
        if (Distance <= 15)
        {
            obj_1.speed = 0f;
            obj_2.speed = 0f;
            obj_3.Enemy_speed = 0f;
            animator=Player.GetComponent<Animator>();
            Hp_bar.SetActive(true);
        }
    }

}
