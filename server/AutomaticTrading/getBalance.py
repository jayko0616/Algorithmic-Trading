#잔고 조회
import sys
import pyupbit

##
# upbit에서 사용자의 잔고 불러오는 함수
# 서버에서 access, secret key를 넘겨받아서 upbit 객체 생성 후
# 잔고 return 
# ###

def getBalance(access, secret):
<<<<<<< HEAD
=======
<<<<<<< HEAD
    #print("poiuytrdfg")
=======
<<<<<<< HEAD
=======
    print("poiuytrdfg")
>>>>>>> b1233d4fae1a14f7244a73977c0fea89ed3d7b09
>>>>>>> 873ea9ba1583c7096d4d1ba95ca68694e0a61b42
>>>>>>> bf75dee111aad0466c47a06464c80b27a2f6998d
    upbit = pyupbit.Upbit(access,  secret)
    balance = upbit.get_balance("KRW")
    return balance

if __name__ == '__main__':
    getBalance(sys.argv[1], sys.argv[2])