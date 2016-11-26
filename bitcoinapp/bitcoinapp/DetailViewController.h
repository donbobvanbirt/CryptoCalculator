//
//  DetailViewController.h
//  bitcoinapp
//
//  Created by Donovan Moore on 11/25/16.
//  Copyright © 2016 Donovan Moore. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "bitcoinapp+CoreDataModel.h"

@interface DetailViewController : UIViewController

@property (strong, nonatomic) Event *detailItem;
@property (weak, nonatomic) IBOutlet UILabel *detailDescriptionLabel;

@end

