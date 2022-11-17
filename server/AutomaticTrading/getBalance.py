#잔고 조회
import sys
import pyupbit

##
# upbit에서 사용자의 잔고 불러오는 함수
# 서버에서 access, secret key를 넘겨받아서 upbit 객체 생성 후
# 잔고 return 
# ###

def getBalance(access, secret):
    upbit = pyupbit.Upbit(access,  secret)
    balance = upbit.get_balance("KRW")
    return balance

if __name__ == '__main__':
    getBalance(sys.argv[1], sys.argv[2])