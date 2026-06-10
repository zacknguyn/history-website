-- ╔════════════════════════════════════════════╗
-- ║ SỬ VIỆT - TẠO DATABASE RIÊNG              ║
-- ╚════════════════════════════════════════════╝

-- Tạo database mới
CREATE DATABASE SuViet;
GO

USE SuViet;
GO

-- ══ BẢNG USERS ══
CREATE TABLE Users (
    id INT PRIMARY KEY IDENTITY(1,1),
    fullname NVARCHAR(100) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE()
);

-- ══ BẢNG MINDMAP LINKS ══
CREATE TABLE MindmapLinks (
    id INT PRIMARY KEY IDENTITY(1,1),
    user_id INT NOT NULL,
    main_url NVARCHAR(500),
    period_0 NVARCHAR(500),
    period_1 NVARCHAR(500),
    period_2 NVARCHAR(500),
    period_3 NVARCHAR(500),
    period_4 NVARCHAR(500),
    period_5 NVARCHAR(500),
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

-- ══ INDEXES ══

CREATE TABLE Reviews (
    id         INT PRIMARY KEY IDENTITY(1,1),
    user_id    INT NOT NULL,
    rating     INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    categories NVARCHAR(300),
    comment    NVARCHAR(1000) NOT NULL,
    helpful    INT DEFAULT 0,
    created_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

CREATE INDEX idx_reviews_user_id ON Reviews(user_id);
PRINT '✅ Tạo bảng Reviews thành công!';
USE SuViet;
UPDATE Users 
SET fullname = N'Trần Thị Thùy Trang'
WHERE username = 'thuytrang';