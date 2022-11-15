#잔고 조회
import sys
import pyupbit


def getBalance(upbitKey):
    balance = upbitKey.get_balance("KRW")
    return balance

if __name__ == '__main__':
    getBalance(sys.argv[1])