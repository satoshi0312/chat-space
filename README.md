# README

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true, index: true|

### Association
- has_many :members
- has_many :groups through :members
- has_many :messages

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user|reference|null: false, foreign_key: true|
|group|reference|null: false, goreign_key: true|

### Association
- belongs_to :user

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users, through :members
- has_many :members
- has_many :messages

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user|reference|null: false, foreign_key: true|
|group|reference|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
