package haisonguyen;

import java.util.Scanner;

public class vd3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Nhập số thứ nhất: ");
        int num1 = scanner.nextInt();
        System.out.print("Nhập số thứ hai: ");
        int num2 = scanner.nextInt();
        
        int min = (num1 < num2) ? num1 : num2;
        
        System.out.println("Số nhỏ nhất trong hai số " + num1 + " và " + num2 + " là " + min);
    }
}
