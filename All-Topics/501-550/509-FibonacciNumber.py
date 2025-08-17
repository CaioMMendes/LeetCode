class Solution(object):
    def fib(self, n):
        """
        :type n: int
        :rtype: int
        """
        if(n==0):return 0
        if(n==1):return 1

        
        one=0
        two=1

        while(n>2):
            current=one+two
            one=two
            two=current
            n-=1
        
        return one+two