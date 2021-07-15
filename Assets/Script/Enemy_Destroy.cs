using System;
using System.Collections;
using System.Collections.Generic;
using System.Security.Cryptography;
using UnityEngine;

public class Enemy_Destroy : MonoBehaviour
{
    [SerializeField]
    private int enemyHp;

    public int EnemyHp
    {
        get
        {
            return enemyHp;
        }
        set
        {
            enemyHp = value;
            if (enemyHp <= 0)
            {
               Destroy(gameObject); 
            }
        }
    }
    private void OnCollisionEnter2D(Collision2D other)
    {
        other.gameObject.SetActive(false);
        EnemyHp -= 1 ;
    }
}
