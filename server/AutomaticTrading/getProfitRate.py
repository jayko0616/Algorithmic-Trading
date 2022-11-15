#종목별 수익률
import sys
import pyupbit


def getProfitRate(upbitKey, ticker):
    balance = upbitKey.get_balance("KRW")
    return balanceser

if __name__ == '__main__':
    getProfitRate(sys.argv[1], sys.argv[2])