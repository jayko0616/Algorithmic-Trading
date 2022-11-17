#자동매매
import sys
import pyupbit
import time
import datetime

def doAutomaticTrading(access, secret, ticker):
    upbit = pyupbit.Upbit(access,  secret)

    def cal_target(ticker):
    df = pyupbit.get_ohlcv(ticker, "day")
    yesterday = df.iloc[-2]
    today = df.iloc[-1]
    yesterday_range = yesterday['high'] - yesterday['low']
    target = today['open'] + yesterday_range * (-0.5)
    return target

    target = cal_target(ticker)

    # 프로그램 처음시작한 날은 매수되지 않도록 처리. -> 현재가가 목표가보다 훨씬 위에 있을 떄 매수될 수 있기 때문!
    op_mode = False
    # 업비트 클래스의 객체 생성 및 보유 상태를 false로 설정
    hold = False

    # 목표가 갱신
    while True:
        now = datetime.datetime.now()

        # !!매도!!
        if now.hour == 8 and now.minute == 59 and 50 <= now.second <= 59:
            if op_mode is True and hold is True:
                # 원화 정보 가져오기
                btc_balance = upbit.get_balance(ticker)
                # 시장가로 팔기
                upbit.sell_market_order(ticker, btc_balance)
                hold = False
            op_mode = False
            time.sleep(10)

        # 9시에 목표가 갱신
        if now.hour == 9 and now.minute == 00 and 20 <= now.second <= 30:
            target = cal_target(ticker)
            time.sleep(10)
            op_mode = True

        price = pyupbit.get_current_price(ticker)

        # !!매수!!
        if op_mode is True and hold is False and price >= target:
            # 원화 정보 가져오기
            krw_balance = upbit.get_balance("KRW")
            # 시장가로 주문, krw_balance * 0.1이라고 하면 자신의 자산의 10프로만 가지고 거래
            upbit.buy_market_order(ticker, krw_balance*0.5)
            hold = True

    
        print(f"현재시간: {now} 목표가: {target} 현재가: {price} 보유상태: {hold} 동작상태: {op_mode}")
    
        time.sleep(1)

if __name__ == '__main__':
    doAutomaticTrading(sys.argv[1], sys.argv[2], sys.argv[3])




