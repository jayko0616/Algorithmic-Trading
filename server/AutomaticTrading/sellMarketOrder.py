#매도
import sys
import pyupbit


def sellMarketOrder(upbitKey, ticker):
    # 원화 정보 가져오기
    krw_balance = upbitKey.get_balance("KRW")
    # 시장가로 주문
    upbitKey.sell_market_order(ticker, krw_balance)


if __name__ == '__main__':
    sellMarketOrder(sys.argv[1],sys.argv[2])
