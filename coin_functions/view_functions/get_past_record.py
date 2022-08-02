import pyupbit
import time
from datetime import datetime

ticker = input("통화와 종목명을 입력해주세요(ex:KRW-BTC): ")    ##티커 조회하는 기능이란 같이 연계하면 좋을 것 같습니다

print("봉 사이즈의 종류는 다음과 같습니다: minute1,minute3,minute5,minute10,minute15,minute30,minute60,minute240,day,week,month")
## 봉에 대한 입력이 어떤게 있는지 예시로 넣었는데 나중에 따로 설명란을 만들어 할 것 같습니다

interval = input("봉사이즈를 입력해주세요(ex:minute1): ")      

to = datetime.now()         ##현재 시간

count = 10                  ##봉의 개수도 입력받고싶은데 이 부분만 input으로 받으면 none이 출력되서 일단 10개만 출력하는 걸로.....

time.sleep(0.1)

print(pyupbit.get_ohlcv(ticker=ticker,interval=interval,to=to,count=count))

