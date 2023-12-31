// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Vault extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Vault entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Vault must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Vault", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Vault | null {
    return changetype<Vault | null>(store.get("Vault", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get blurPool(): Bytes {
    let value = this.get("blurPool");
    return value!.toBytes();
  }

  set blurPool(value: Bytes) {
    this.set("blurPool", Value.fromBytes(value));
  }

  get blend(): Bytes {
    let value = this.get("blend");
    return value!.toBytes();
  }

  set blend(value: Bytes) {
    this.set("blend", Value.fromBytes(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value!.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get manager(): Bytes {
    let value = this.get("manager");
    return value!.toBytes();
  }

  set manager(value: Bytes) {
    this.set("manager", Value.fromBytes(value));
  }

  get managingFee(): BigInt {
    let value = this.get("managingFee");
    return value!.toBigInt();
  }

  set managingFee(value: BigInt) {
    this.set("managingFee", Value.fromBigInt(value));
  }

  get firstMintAtBlock(): BigInt {
    let value = this.get("firstMintAtBlock");
    return value!.toBigInt();
  }

  set firstMintAtBlock(value: BigInt) {
    this.set("firstMintAtBlock", Value.fromBigInt(value));
  }

  get underlyingBalance(): BigInt {
    let value = this.get("underlyingBalance");
    return value!.toBigInt();
  }

  set underlyingBalance(value: BigInt) {
    this.set("underlyingBalance", Value.fromBigInt(value));
  }

  get ownedDebt(): BigInt {
    let value = this.get("ownedDebt");
    return value!.toBigInt();
  }

  set ownedDebt(value: BigInt) {
    this.set("ownedDebt", Value.fromBigInt(value));
  }

  get mints(): Array<string> {
    let value = this.get("mints");
    return value!.toStringArray();
  }

  set mints(value: Array<string>) {
    this.set("mints", Value.fromStringArray(value));
  }

  get lastMintIndex(): BigInt {
    let value = this.get("lastMintIndex");
    return value!.toBigInt();
  }

  set lastMintIndex(value: BigInt) {
    this.set("lastMintIndex", Value.fromBigInt(value));
  }

  get burns(): Array<string> {
    let value = this.get("burns");
    return value!.toStringArray();
  }

  set burns(value: Array<string>) {
    this.set("burns", Value.fromStringArray(value));
  }

  get lastBurnIndex(): BigInt {
    let value = this.get("lastBurnIndex");
    return value!.toBigInt();
  }

  set lastBurnIndex(value: BigInt) {
    this.set("lastBurnIndex", Value.fromBigInt(value));
  }

  get users(): Array<Bytes> {
    let value = this.get("users");
    return value!.toBytesArray();
  }

  set users(value: Array<Bytes>) {
    this.set("users", Value.fromBytesArray(value));
  }

  get lastUserIndex(): BigInt {
    let value = this.get("lastUserIndex");
    return value!.toBigInt();
  }

  set lastUserIndex(value: BigInt) {
    this.set("lastUserIndex", Value.fromBigInt(value));
  }

  get loans(): Array<string> {
    let value = this.get("loans");
    return value!.toStringArray();
  }

  set loans(value: Array<string>) {
    this.set("loans", Value.fromStringArray(value));
  }

  get lastLoanIndex(): BigInt {
    let value = this.get("lastLoanIndex");
    return value!.toBigInt();
  }

  set lastLoanIndex(value: BigInt) {
    this.set("lastLoanIndex", Value.fromBigInt(value));
  }

  get auctions(): Array<string> {
    let value = this.get("auctions");
    return value!.toStringArray();
  }

  set auctions(value: Array<string>) {
    this.set("auctions", Value.fromStringArray(value));
  }

  get lastAuctionIndex(): BigInt {
    let value = this.get("lastAuctionIndex");
    return value!.toBigInt();
  }

  set lastAuctionIndex(value: BigInt) {
    this.set("lastAuctionIndex", Value.fromBigInt(value));
  }

  get seizedNFTs(): Array<string> {
    let value = this.get("seizedNFTs");
    return value!.toStringArray();
  }

  set seizedNFTs(value: Array<string>) {
    this.set("seizedNFTs", Value.fromStringArray(value));
  }

  get lastSeizedNFTIndex(): BigInt {
    let value = this.get("lastSeizedNFTIndex");
    return value!.toBigInt();
  }

  set lastSeizedNFTIndex(value: BigInt) {
    this.set("lastSeizedNFTIndex", Value.fromBigInt(value));
  }

  get liquidatedNFTs(): Array<string> {
    let value = this.get("liquidatedNFTs");
    return value!.toStringArray();
  }

  set liquidatedNFTs(value: Array<string>) {
    this.set("liquidatedNFTs", Value.fromStringArray(value));
  }

  get lastLiquidatedNFTIndex(): BigInt {
    let value = this.get("lastLiquidatedNFTIndex");
    return value!.toBigInt();
  }

  set lastLiquidatedNFTIndex(value: BigInt) {
    this.set("lastLiquidatedNFTIndex", Value.fromBigInt(value));
  }
}

export class User extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type User must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): User | null {
    return changetype<User | null>(store.get("User", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value!.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get token(): BigInt {
    let value = this.get("token");
    return value!.toBigInt();
  }

  set token(value: BigInt) {
    this.set("token", Value.fromBigInt(value));
  }

  get userIndex(): BigInt {
    let value = this.get("userIndex");
    return value!.toBigInt();
  }

  set userIndex(value: BigInt) {
    this.set("userIndex", Value.fromBigInt(value));
  }

  get vault(): Bytes {
    let value = this.get("vault");
    return value!.toBytes();
  }

  set vault(value: Bytes) {
    this.set("vault", Value.fromBytes(value));
  }
}

export class Mint extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Mint entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Mint must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Mint", id.toString(), this);
    }
  }

  static load(id: string): Mint | null {
    return changetype<Mint | null>(store.get("Mint", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get receiver(): Bytes {
    let value = this.get("receiver");
    return value!.toBytes();
  }

  set receiver(value: Bytes) {
    this.set("receiver", Value.fromBytes(value));
  }

  get mintAmount(): BigInt {
    let value = this.get("mintAmount");
    return value!.toBigInt();
  }

  set mintAmount(value: BigInt) {
    this.set("mintAmount", Value.fromBigInt(value));
  }

  get amountIn(): BigInt {
    let value = this.get("amountIn");
    return value!.toBigInt();
  }

  set amountIn(value: BigInt) {
    this.set("amountIn", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get vault(): Bytes {
    let value = this.get("vault");
    return value!.toBytes();
  }

  set vault(value: Bytes) {
    this.set("vault", Value.fromBytes(value));
  }
}

export class Burn extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Burn entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Burn must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Burn", id.toString(), this);
    }
  }

  static load(id: string): Burn | null {
    return changetype<Burn | null>(store.get("Burn", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get receiver(): Bytes {
    let value = this.get("receiver");
    return value!.toBytes();
  }

  set receiver(value: Bytes) {
    this.set("receiver", Value.fromBytes(value));
  }

  get burnAmount(): BigInt {
    let value = this.get("burnAmount");
    return value!.toBigInt();
  }

  set burnAmount(value: BigInt) {
    this.set("burnAmount", Value.fromBigInt(value));
  }

  get amountOut(): BigInt {
    let value = this.get("amountOut");
    return value!.toBigInt();
  }

  set amountOut(value: BigInt) {
    this.set("amountOut", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get vault(): Bytes {
    let value = this.get("vault");
    return value!.toBytes();
  }

  set vault(value: Bytes) {
    this.set("vault", Value.fromBytes(value));
  }
}

export class Loan extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Loan entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Loan must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Loan", id.toString(), this);
    }
  }

  static load(id: string): Loan | null {
    return changetype<Loan | null>(store.get("Loan", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get lienId(): BigInt {
    let value = this.get("lienId");
    return value!.toBigInt();
  }

  set lienId(value: BigInt) {
    this.set("lienId", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get vault(): Bytes {
    let value = this.get("vault");
    return value!.toBytes();
  }

  set vault(value: Bytes) {
    this.set("vault", Value.fromBytes(value));
  }
}

export class Auction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Auction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Auction must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Auction", id.toString(), this);
    }
  }

  static load(id: string): Auction | null {
    return changetype<Auction | null>(store.get("Auction", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get collection(): Bytes {
    let value = this.get("collection");
    return value!.toBytes();
  }

  set collection(value: Bytes) {
    this.set("collection", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get lienId(): BigInt {
    let value = this.get("lienId");
    return value!.toBigInt();
  }

  set lienId(value: BigInt) {
    this.set("lienId", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get vault(): Bytes {
    let value = this.get("vault");
    return value!.toBytes();
  }

  set vault(value: Bytes) {
    this.set("vault", Value.fromBytes(value));
  }
}

export class NFTSeized extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NFTSeized entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NFTSeized must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NFTSeized", id.toString(), this);
    }
  }

  static load(id: string): NFTSeized | null {
    return changetype<NFTSeized | null>(store.get("NFTSeized", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get collection(): Bytes {
    let value = this.get("collection");
    return value!.toBytes();
  }

  set collection(value: Bytes) {
    this.set("collection", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get lienId(): BigInt {
    let value = this.get("lienId");
    return value!.toBigInt();
  }

  set lienId(value: BigInt) {
    this.set("lienId", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get vault(): Bytes {
    let value = this.get("vault");
    return value!.toBytes();
  }

  set vault(value: Bytes) {
    this.set("vault", Value.fromBytes(value));
  }
}

export class NFTLiquidated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NFTLiquidated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NFTLiquidated must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NFTLiquidated", id.toString(), this);
    }
  }

  static load(id: string): NFTLiquidated | null {
    return changetype<NFTLiquidated | null>(store.get("NFTLiquidated", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get collection(): Bytes {
    let value = this.get("collection");
    return value!.toBytes();
  }

  set collection(value: Bytes) {
    this.set("collection", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get recipient(): Bytes {
    let value = this.get("recipient");
    return value!.toBytes();
  }

  set recipient(value: Bytes) {
    this.set("recipient", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get vault(): Bytes {
    let value = this.get("vault");
    return value!.toBytes();
  }

  set vault(value: Bytes) {
    this.set("vault", Value.fromBytes(value));
  }
}
