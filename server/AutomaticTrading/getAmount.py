#특정 종목의 매수 금액 조회
import sys
import pyupbit


def getAmount(upbitKey, ticker):
    amount = upbitKey.get_amount(ticker)
    return amount

if __name__ == '__main__':
    getAmount(sys.argv[1], sys.argv[2])


