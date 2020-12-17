//
//  ViewController.h
//  ios
//
//  Created by wangzhe on 2020/12/1.
//
// 接口定义：放在头文件.h中，定义一个类ViewController
/**
 @interface MyClass : NSObject
 @end
 public class MyClass extends NSObject {
 }
 */
#import <UIKit/UIKit.h>

@interface ViewController : UIViewController

- (IBAction) rnTestButtonPressed:(id)sender; // 响应“按钮被按下事件”的方法

@end

