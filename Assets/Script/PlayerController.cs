using System.Collections;
using System.Collections.Generic;
using UnityEngine;



/// <summary>

/// 근데 아직 에너미 생성과 에너미가 나오는것을 어떻게 랜덤으로 해야하고 스킬같은것은 어떻게 구현해야할지 모르겠음
/// 그리고 리듬게임과의 연계이므로 공격콤보같은것을 넣으면 좋을것같기는하나 애니메이션의 한계가 있고 애니메이션이 있으면 시도는 해보고 싶음

/// </summary>
public class PlayerController : MonoBehaviour
{
    private Rigidbody2D PlayerRigidbody;
    
    private Animator animator;

    private float curTime;
    private float curTime_in;
    public float coolTime = 0.5f;


    // Start is called before the first frame update
    void Start()
    {
        // 초기화
        PlayerRigidbody = GetComponent<Rigidbody2D>();
        animator = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {
        // 사용자의 입력을 처리하고 공격하는 자리   
        if (Input.GetKeyDown(KeyCode.LeftControl))
        {
            animator.SetTrigger("Attack");
        }
    }
}
    
    

        
            

