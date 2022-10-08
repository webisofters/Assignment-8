var a:number [] = [23,40,30,10,35]
var b:number = 0
for(var i=0;i<5;i++)
        {
            for(var j=1;j<=5;j++) 
            {
                if(a[i]<a[j])
                {
                    b=a[i];
                    a[i]=a[j];
                    a[j]=b;
                }
            }
        }
        console.log("Second Largest element is ",a[4])
