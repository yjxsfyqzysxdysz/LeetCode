/**
 * 977. 有序数组的平方
 *
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 *
 * 示例 1：
 * 输入：nums = [-4,-1,0,3,10]
 * 输出：[0,1,9,16,100]
 * 解释：平方后，数组变为 [16,1,0,9,100]
 * 排序后，数组变为 [0,1,9,16,100]
 *
 * 示例 2：
 * 输入：nums = [-7,-3,2,3,11]
 * 输出：[4,9,9,49,121]
 *
 * 提示：
 * 1 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums 已按 非递减顺序 排序
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  return nums.sort((a, b) => Math.abs(a) - Math.abs(b)).map(e => e * e)
}

// 1、直接插入排序
// int* sortedSquares(int* a, int n, int* returnSize){
// 	*returnSize=n;
// 	if(n==0) return a;
// 	a[0]=a[0]*a[0];
// 	int j;
// 	for(int i=1;i<n;i++){
// 		int temp=a[i]*a[i];
// 		for(j=i-1;j>=0;j--){
// 			if(temp<a[j]) a[j+1]=a[j];
// 			else break;
// 		}
// 		a[j+1]=temp;
// 	}
// 	return a;
// }

// 2、折半插入排序
// int* sortedSquares(int* a, int n, int* returnSize){
// 	*returnSize=n;
// 	if(n==0) return a;
// 	a[0]=a[0]*a[0];
// 	int j;
// 	for(int i=1;i<n;i++){
// 		int temp=a[i]*a[i];
// 		int low=0,high=i-1;
// 		while(low<=high){
// 			int mid=(low+high)/2;
// 			if(temp>a[mid]) low=mid+1;
// 			else high=mi-1;
// 		}
// 		for(j=i-1;j>high;j--){
// 			a[j+1]=a[j];
// 		}
// 		a[j+1]=temp;
// 	}
// 	return a;
// }

// 3、选择排序
// int* sortedSquares(int* a, int n, int* returnSize){
// 	*returnSize=n;
// 	if(n==0) return a;
// 	int k=0;
// 	for(int i=0;i<n;i++){
// 		a[k++]=a[i]*a[i];
// 	}
// 	for(int i=0;i<n-1;i++){
// 		for(int j=i+1;j<n;j++){
// 			if(a[j]<a[i]){
// 				int temp=a[i];
// 				a[i]=a[j];
// 				a[j]=temp;
// 			}
// 		}
// 	}
// 	return a;
// }

// 4、冒泡排序
// int* sortedSquares(int* a, int n, int* returnSize){
// 	*returnSize=n;
// 	if(n==0) return a;
// 	int k=0;
// 	for(int i=0;i<n;i++){
// 		a[k++]=a[i]*a[i];
// 	}
// 	for(int i=0;i<n;i++){
// 		for(int j=0;j<n-i-1;j++){
// 			if(a[j+1]<a[j]){
// 				int temp=a[j+1];
// 				a[j+1]=a[j];
// 				a[j]=temp;
// 			}
// 		}
// 	}
// 	return a;
// }

// 5、带判断条件的冒泡排序
// int* sortedSquares(int* a, int n, int* returnSize){
// 	*returnSize=n;
// 	if(n==0) return a;
// 	int k=0;
// 	for(int i=0;i<n;i++){
// 		a[k++]=a[i]*a[i];
// 	}
// 	int flag=1;
// 	while(n>1&&flag==1){
// 		flag=0;
// 		for(int j=0;j<n-1;j++){
// 			if(a[j+1]<a[j]){
// 				flag=1;
// 				int temp=a[j+1];
// 				a[j+1]=a[j];
// 				a[j]=temp;
// 			}
// 		}
// 	}
// 	return a;
// }
// 选择排序 和冒泡排序会时间超限

// 6、快排
// int Pattion(int *a,int low,int high){
// 	int temp=a[low],pivoty=a[low];
// 	while(low<high){
// 		while(a[high]>=pivoty&&low<high) high--;
// 		a[low]=a[high];
// 		while(a[low]<=pivoty&&low<high) low++;
// 		a[high]=a[low];
// 	}
// 	a[low]=temp;
// 	return low;
// }
// void QuickSort(int *a,int low,int high){
// 	int p;
// 	if(low<high){
// 		p=Pattion(a,low,high);
// 		QuickSort(a,low,p-1);
// 		QuickSort(a,p+1,high);
// 	}
// }

// int* sortedSquares(int* a, int n, int* returnSize){
// 	*returnSize=n;
// 	if(n==0) return a;
//     int k=0;
// 	for(int i=0;i<n;i++){
// 		a[k++]=a[i]*a[i];
// 	}
// 	QuickSort(a,0,n-1);
// 	return a;
// }
// 这个有点猛哦 一下超过百分之七十多

// 7、归并排序 可能我写的问题 内存超限了
// void MergeSort(int *a,int low,int mid,int high){
// 	int *b=(int *)malloc(sizeof(int)*(high+1));
// 	for(int i=low;i<=high;i++){
// 		b[i]=a[i];
// 	}
// 	int i=low,j=mid+1,temp=low;
// 	while(i<=mid&&j<=high){
// 		if(b[i]<b[j]){
// 			a[temp++]=b[i++];
// 		}
// 		else a[temp++]=b[j++];
// 	}
// 	while(i<=mid) a[temp++]=b[i++];
// 	while(j<=high) a[temp++]=b[j++];
// }
// void Merge(int *a,int low,int high){
// 	int mid;
// 	if(low==high)return ;
// 	else{
// 		mid=(low+high)/2;
// 		Merge(a,low,mid);
// 		Merge(a,mid+1,high);
// 		MergeSort(a,low,mid,high);
// 	}
// }
// int* sortedSquares(int* a, int n, int* returnSize){
// 	*returnSize=n;
// 	if(n==0) return a;
//     int k=0;
// 	for(int i=0;i<n;i++){
// 		a[k++]=a[i]*a[i];
// 	}
// 	Merge(a,0,n-1);
// 	return a;
// }

// 8、双指针
// int* sortedSquares(int* a, int n, int* returnSize){
// 	*returnSize=n;
// 	if(n==0) return a;
// 	int p=0,q=-1;
// 	for(int i=0;i<n;i++){
// 		if(a[i]>=0) {
// 			p=i;
// 			q=i-1;
// 			break;
// 		}
// 	}
// 	int k=0;
// 	int *res=(int *)malloc(sizeof(int)*n);
// 	while(p<n&&q>=0){
// 		if(a[p]*a[p]<a[q]*a[q]){
// 			res[k++]=a[p]*a[p];
// 			p++;
// 		}
// 		else{
// 			res[k++]=a[q]*a[q];
// 			q--;
// 		}
// 	}
// 	while(p<n) {
// 		res[k++]=a[p]*a[p];
// 		p++;
// 	}
// 	while(q>=0){
// 		res[k++]=a[q]*a[q];
// 		q--;
// 	}
// 	return res;
// }

console.log(sortedSquares([-4, -1, 0, 3, 10]))
console.log(sortedSquares([-7, -3, 2, 3, 11]))
