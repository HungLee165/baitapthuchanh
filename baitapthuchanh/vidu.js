package tongchuson;

import java.util.Scanner;
public class vd1 {
	 public static void main(String[] args) {
	        Scanner scanner = new Scanner(System.in);
	        
	        System.out.print("Nhập số n: ");
	        int n = scanner.nextInt();
	        
	        int sum = 0;
	        while (n > 0) {
	            sum += n % 10;  
	            n /= 10; 
	        }
	        System.out.println("Tổng các chữ số của " + n + " là " + sum);
	    }
	}
