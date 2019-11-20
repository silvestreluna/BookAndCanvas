create database BookAndCanvas

create table Users
(
	[Id] int primary key identity(1,1),
	[FName] nvarchar(50) not null,
	[LName] nvarchar(50) not null,
	[Phone] nvarchar(50) not null,
	[Email] nvarchar(50) not null,
	[ImgUrl] nvarchar(50),
	[Bio] nvarchar (max)
)

create table UserMsg
(
	[Id] int primary key identity(1,1),
	[MessageId] int not null,
	[BuyerId] int not null,
	[SellerId] int not null
)

alter table UserMsg
add constraint FK_UserMsg_User_Buyer 
	foreign key (BuyerId)
	references Users (Id)

alter table UserMsg
add constraint FK_UserMsg_User_Seller 
	foreign key (SellerId)
	references Users (Id)

create table Message
(
	[Id] int primary key identity(1,1),
	[MessageId] int not null,
	[MsgDate] DateTime not null,
	[isRead] bit not null,
	[MsgTitle] nvarchar(250),
	[MsgText] nvarchar(max)
)

alter table UserMsg
add constraint FK_UserMsg_Message_Id 
	foreign key (MessageId)
	references Message (Id)

create table Invoice
(
	[Id] int primary key identity(1,1),
	[Date] DateTime not null,
	[Total] Float not null,
	[BuyerId] int not null,
	[ServiceType] int not null,
	[PaymentId] int not null,
)

create table Service
(
	[Id] int primary key identity(1,1),
	[ServiceName] nvarchar(50) not null
)

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

create table Product
(
	[Id] int primary key identity(1,1),
	[ServiceType] int not null,
	[Description] nvarchar(250) not null,
	[SellerId] int not null,
	[ProductName] nvarchar(50) not null,
	[Price] float not null,
	[ImgUrl] nvarchar(50) not null,
)

alter table Product
add constraint FK_Product_Service_Id 
	foreign key (ServiceType)
	references Service (Id)

alter table Product
add constraint FK_Product_User_Id 
	foreign key (SellerId)
	references Users (Id)

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

create table Payment_Type
(
	[Id] int primary key identity(1,1),
	[PaymentName] nvarchar(50) not null,
)

alter table Payment
add constraint FK_Payment_PaymentType_Id 
	foreign key (PaymentType)
	references Payment_Type (Id)