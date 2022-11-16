#매수
import sys
import pyupbit


def buyMarketOrder(upbitKey, ticker):
    # 원화 정보 가져오기
    krw_balance = upbitKey.get_balance("KRW")
    # 시장가로 주문
    upbitKey.buy_market_order(ticker, krw_balance)


if __name__ == '__main__':
    buyMarketOrder(sys.argv[1],sys.argv[2])
