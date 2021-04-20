SET QUOTED_IDENTIFIER ON
GO

SET ANSI_NULLS ON
GO

CREATE PROCEDURE [Accounts].[Account_Update] (
    @network VARCHAR(50),
    @accountAddress CHAR(42),
    @wallet VARCHAR(MAX),
    @tokenFundingAccountAddress CHAR(42),
    @unlock VARCHAR(200),
    @version INT,
    @enabled BIT
    )
AS
BEGIN
    SET NOCOUNT ON;

    UPDATE Accounts.Account
    SET Wallet = @wallet,
        TokenFundingAccountAddress = @tokenFundingAccountAddress,
        Unlock = @unlock,
        Version = @version,
        Enabled = @enabled,
        DateUpdated = SYSUTCDATETIME()
    WHERE Network = @network
        AND AccountAddress = @accountAddress;
END
GO


