//
//  AppDelegate.h
//  bitcoinapp
//
//  Created by Donovan Moore on 11/25/16.
//  Copyright © 2016 Donovan Moore. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <CoreData/CoreData.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow *window;

@property (readonly, strong) NSPersistentContainer *persistentContainer;

- (void)saveContext;


@end

