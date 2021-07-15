using System.Collections;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using UnityEngine;

public class Arrow : MonoBehaviour
{

    public Vector3 direction;
    private float Speed;
    private float Angle = -90;
    public void Init(Vector3 dir, float spe)
    {
        direction = dir;
        Speed = spe;
    }
    void Update()
    {
        Vector3 Velocity = direction * Speed;
        transform.position += Velocity;
    }
}
