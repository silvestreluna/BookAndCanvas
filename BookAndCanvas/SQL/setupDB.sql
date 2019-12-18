create database BookAndCanvas

use BookAndCanvas

create table Users
(
	[Id] int primary key identity(1,1),
	[FName] nvarchar(50) not null,
	[LName] nvarchar(50) not null,
	[Phone] nvarchar(50) not null,
	[Email] nvarchar(50) not null,
	[ImgUrl] nvarchar(MAX),
	[Bio] nvarchar (max)
)

use BookAndCanvas

create table Conversations
(
	[Id] int primary key identity(1,1),

)

use BookAndCanvas
create table [Message]
(
	[Id] int primary key identity(1,1),
	[MsgDate] datetime DEFAULT GETDATE() not null,
	[isRead] bit not null,
	[MsgText] nvarchar(max),
	[userMsgId] int not null,
	[from] nvarchar(250) not null
)

use BookAndCanvas
create table Participants
(
	[Id] int primary key identity(1,1),
	[UserId] int not null,
	[ConversationId] int not null,
)

alter table Participants
add constraint FK_UserMsg_UserId
	foreign key (UserId)
	references Users (Id)

alter table Participants
add constraint FK_Participant_ConversationId
	foreign key (ConversationId)
	references Conversations (Id)

alter table [Message]
add constraint FK_Message_ConversationID
	foreign key (userMsgId)
	references Conversations (Id)

	use BookAndCanvas
create table Invoice
(
	[Id] int primary key identity(1,1),
	[Date] datetime DEFAULT GETDATE() not null,
	[Total] Float not null,
	[BuyerId] int not null,
	[ServiceType] int not null,
	[PaymentId] int not null,
)

use BookAndCanvas
create table Service
(
	[Id] int primary key identity(1,1),
	[ServiceName] nvarchar(50) not null
)

use BookAndCanvas
create table Payment
(
	[Id] int primary key identity(1,1),
	[Total] float not null,
	[PaymentType] int not null
)

alter table Invoice
add constraint FK_Invoice_User_Id 
	foreign key (BuyerId)
	references Users (Id)

alter table Invoice
add constraint FK_Invoice_Service_Id 
	foreign key (ServiceType)
	references Service (Id)

alter table Invoice
add constraint FK_Invoice_Payment_Id 
	foreign key (PaymentId)
	references Payment (Id)

	use BookAndCanvas
create table Product
(
	[Id] int primary key identity(1,1),
	[ServiceType] int not null,
	[Description] nvarchar(250) not null,
	[SellerId] int not null,
	[ProductName] nvarchar(50) not null,
	[Price] float not null,
	[ImgUrl] nvarchar(50) not null,
	[dateAdded] datetime DEFAULT GETDATE() not null,
	[Qty] int not null
)

alter table Product
add constraint FK_Product_Service_Id 
	foreign key (ServiceType)
	references Service (Id)

alter table Product
add constraint FK_Product_User_Id 
	foreign key (SellerId)
	references Users (Id)

	use BookAndCanvas
create table Product_Invoice
(
	[Id] int primary key identity(1,1),
	[InvoiceId] int not null,
	[ProductId] int not null
)

alter table Product_Invoice
add constraint FK_ProductInvoice_Invoice_Id 
	foreign key (InvoiceId)
	references Invoice (Id)

alter table Product_Invoice
add constraint FK_ProductInvoice_Producte_Id 
	foreign key (ProductId)
	references Product (Id)

	use BookAndCanvas
create table Payment_Type
(
	[Id] int primary key identity(1,1),
	[PaymentName] nvarchar(50) not null,
)

alter table Payment
add constraint FK_Payment_PaymentType_Id 
	foreign key (PaymentType)
	references Payment_Type (Id)


INSERT INTO Users (FName,LName,Phone,Email,ImgUrl, Bio) 
VALUES ('Bob', 'Barker', '9314464567', 'bob@gmail.com', 'www.whatever.com', 'This is a bio' ),
		('Steve', 'Stevenson', '9312253814', 'steve@gmail.com', 'www.whatever.com/1', 'This is a bio 2' ),
		('Ted', 'Thompson', '9312255678', 'ted@gmail.com', 'www.whatever.com/2', 'This is a bio 3' );

insert into Conversations default values
insert into Conversations default values
insert into Conversations default values

INSERT INTO Participants (UserId, ConversationId) 
VALUES (1, 2),
		(2, 3),
		(3, 1);

insert into Service (ServiceName)
Values ('Visual Arts'),
		('Performance Arts'),
		('Literary Arts')

insert into Payment_Type (PaymentName)
values ('Check'),
		('Credit Card'),
		('PayPal')

insert into Payment (Total, PaymentType)
values	(13.99, 1),
		(21.99, 2),
		(59.99, 3)

insert into Invoice (Date, Total, BuyerId, ServiceType, PaymentId)
values ('12-03-19', 13.99, 1, 1, 1),
		('11-21-19', 21.99, 2, 2, 2),
		('06-13-17', 59.99, 3, 3, 3)

insert into [Message] (MsgDate, isRead, MsgText, userMsgId, [from])
values ('12-03-19', 0, 'This is the message text 1', 1, 1),
		('11-21-19', 1, 'This is the message text 2', 2, 2),
		('06-13-17', 0, 'This is the message text 3', 3, 3)

Insert into Product (ServiceType, Description, SellerId, ProductName, Price, ImgUrl, dateAdded, Qty)
values (1, 'This is a beautiful art', 1, 'Painting', 13.99, 'www.imgurl.com/1', '12-05-2019', 3),
		(2, 'This is a beautiful art too', 2, 'Book', 21.99, 'www.imgurl.com/2', '12-05-2019', 2),
		(3, 'This is a beautiful art too too', 3, 'Music', 59.99, 'www.imgurl.com/3', '12-05-2019', 31)



--**** THIS IS FOR IMAGES TABLE
use BookAndCanvas

create table Images
(
	[Id] int primary key identity(1,1),
	[userId] int not null,
	productId int not null,
	imageUrl nvarchar(max)
)

use BookAndCanvas
alter table Images 
	add constraint FK_Images_ProductId
					foreign key(ProductId)
					references Product(Id)
					ON DELETE CASCADE

alter table Images 
	add constraint FK_Images_userId
					foreign key(UserId)
					references Users(Id)
