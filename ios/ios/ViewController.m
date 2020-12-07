//
//  ViewController.m
//  ios
//
//  Created by wangzhe on 2020/12/1.
//

#import "ViewController.h"
#import <React/RCTRootView.h> // 新增的依赖

@interface ViewController ()

@end

@implementation ViewController

// 新增的事件响应方法
- (IBAction)rnTestButtonPressed:(id)sender {
    NSLog(@"RNTest Button Pressed");
//    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
    NSURL *jsCodeLocation;
    jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"bundle/index"withExtension:@"jsbundle"];
        
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL: jsCodeLocation
                                moduleName: @"MyReactNativeApp"
                         initialProperties:
     @{}
                             launchOptions: nil];
    UIViewController *vc = [[UIViewController alloc] init];
    vc.view = rootView;
    [self presentViewController:vc animated:YES completion:nil];
}

 - (void)viewDidLoad {
     [super viewDidLoad];
     // Do any additional setup after loading the view.
 }


@end
