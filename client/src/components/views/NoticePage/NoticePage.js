import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../MainPage/MainPage.css';
import LandingHeader from '../LandingHeader/LandingHeader';
import './NoticePage.css';

function NoticePage (){ 

    return (
        <div className='layout'>
          <LandingHeader/>
          <Header/>
          <div>
          <div class="parent">
            <div class="child">
              <div class="dataTbl1">
                <table>
                  <caption>공지사항</caption>
                    <colgroup> 
                      <col width="10%"/>
                      <col width="*"/>  
                      <col width="14%"/>
                    </colgroup>
                  <thead>
                      <th scope="번호">No</th> 
                      <th scope="제목">Title</th>
                      <th scope="등록일">Date</th>
                  </thead>
                  <tbody>
                      <tr>
                          <td>*</td>
                          <td class="article"><strong>
                            <details>
                              <summary>업비트 전산오류 안내</summary>
                              <p></p>
                              <p></p>
                              안녕하세요. Jayco에 연동된 계좌주인 고재휘입니다. 
                              3만원이 들어있는 업비트 계좌가 지금 전산상 오류로 입출금이 불가능한 상태입니다.
                              새벽 3시18분입니다. 화가납니다.
                          </details>
                          </strong></td><td>2022-11-18</td>
                      </tr>
                      <tr>
                          <td>*</td>
                          <td class="article"><strong>
                            <details>
                              <summary>셈틀제 및 학습공동체 서류 안내</summary>
                              <p></p>
                              <p></p>
                              11월 21일에 진행될 셈틀제는 우리팀이 1등하면 좋겠습니다. 
                              학습공동체 남은 돈 쓰는거랑 보고서는 셈틀제 끝나고 여유있게 생각해봅시다.
                              새벽 3시 25분입니다.
                          </details>
                          </strong></td><td>2022-11-18</td>
                      </tr>
                      <tr>
                          <td>01</td>
                          <td class="article"><strong>
                            <details>
                              <summary>[행사공지]22.11.22 컴과인의 밤</summary>
                              <p></p>
                              <p></p>
                              작성자: 고재휘
                              <p></p>
                              컴과인의 밤이 4일 앞으로 왔습니다. 모두 만반의 준비를 해주시길 바랍니다.
                          </details>
                          </strong></td><td>2022-11-18</td>
                      </tr>
                      <tr>
                          <td>02</td>
                          <td class="article"><strong>
                            <details>
                              <summary>[회의 일정]11월 18일 회의 안내</summary>
                              <p></p>
                              <p></p>
                              작성자: 고재휘
                              <p></p>
                              백주년기념관 4층에서 12시에 회의합니다. 보고서 작성하기
                          </details>
                          </strong></td><td>2022-11-18</td>
                      </tr>
                      <tr>
                          <td>03</td>
                          <td class="article"><strong>
                            <details>
                              <summary>[공과대학 학생회]LT</summary>
                              <p></p>
                              <p></p>
                              작성자:고재휘
                              <p></p>
                              6시30분차 타고 공과대 LT 다녀와야지
                          </details>
                          </strong></td><td>2022-11-18</td>
                      </tr>
                      <tr>
                          <td>04</td>
                          <td class="article"><strong>
                            <details>
                              <summary>[서울시립대학교]보강주간 안내</summary>
                              <p></p>
                              <p></p>
                              작성자:고재휘
                              <p></p>
                              11월 17일부터 11월 23일까지는 보강주간입니다. 
                          </details>
                          </strong></td><td>2022-11-18</td>
                      </tr>
                      <tr>
                          <td>05</td>
                          <td class="article">-----</td>
                          <td></td>
                      </tr>
                      <tr>
                          <td>06</td>
                          <td class="article">-----</td>
                          <td></td>
                      </tr>
                      <tr>
                          <td colspan="3">JAYCO</td>
                      </tr>
                  </tbody>
                </table>
                </div>
          </div>
          <div class="child">
            <div class = "source">
              <iframe src="https://www.blockmedia.co.kr/" width="700" height="480" scrolling="no"></iframe>
            </div>
          </div>
          </div>
          </div>
          <Footer/>
        </div>
  )
}


export default NoticePage;