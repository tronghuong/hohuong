Dựa vào ERD thì chúng ta tiến hành thiết kế database cho MongoDB trên Back-end như sau:

var UserSchema = new Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  role: { type: String, default: 'user' },
  gender: { type: Boolean, default: false },//'false - Male, true - Female'
  avatar: { type: String, default: '' },
  hashedPassword: String,
  provider: String,
  salt: String
});

var TransactionSchema = new Schema({
  user_id: {type: Schema.Types.ObjectId, ref: "User"},
  from: {type: Schema.Types.ObjectId, ref: "Fund"},
  to: {type: Schema.Types.ObjectId, ref: "Fund"},
  content: { type: String, default: '' },
  type: { type: Boolean, default: false },// 'false - Income, true - Outcome'
  amount: { type: Number, default: 0 }
});

var FundSchema = new Schema({
  name: { type: String, default: '' },
  amount: { type: Number, default: 0 },
  type: { type: Boolean, default: false },// 'false - Income, true - Outcome'
  deleted: { type: Boolean, default: false },// 'false - not delete, true - delete',
});