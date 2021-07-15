using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy_Control : MonoBehaviour
{
    public float Enemy_speed;

    void Start()
    {
        // 초기화
    }

    void Update()
    {
        transform.Translate(Enemy_speed * Vector3.left * Time.deltaTime);
    }

}
