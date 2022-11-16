#매수한 전 금액 조회
import sys
import pyupbit



def getAllAmount(upbitKey):
    amount = upbitKey.get_amount('ALL')
    return amount

if __name__ == '__main__':
    getAllAmount(sys.argv[1])