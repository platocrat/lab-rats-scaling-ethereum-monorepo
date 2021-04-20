CREATE TABLE [Locking].[GameManager] (
    [ObjectId] [char](42) COLLATE Latin1_General_CI_AS NOT NULL,
    [LockedBy] [varchar](100) COLLATE Latin1_General_CI_AS NOT NULL,
    [LockedAt] [datetime2] NOT NULL
    ) ON [PRIMARY]
GO

ALTER TABLE [Locking].[GameManager] ADD CONSTRAINT [PK_GameManager] PRIMARY KEY CLUSTERED ([ObjectId]) ON [PRIMARY]
GO


