#매도
import sys
import pyupbit


def sellMarketOrder(access, secret, ticker):
    upbit = pyupbit.Upbit(access,  secret)
    # 원화 정보 가져오기
    krw_balance = upbit.get_balance("KRW")
    # 시장가로 주문
    upbit.sell_market_order(ticker, krw_balance)

if __name__ == '__main__':
    sellMarketOrder(sys.argv[1],sys.argv[2],sys.argv[3])
