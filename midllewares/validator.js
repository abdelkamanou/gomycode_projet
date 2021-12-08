const {check,validationResult}=require('express-validator')

exports.registerRules=()=>[
    check('email','this field is required').notEmpty(),
    check('email','this field should be a valid email').isEmail(),
    check('password','Password should have 6 char at least').isLength({min:6,max:15})
]
exports.confirmationRegisterRules=()=>[
    check('email','this field is required').notEmpty(),
    check('email','this field should be a valid email').isEmail(),
   // check('token_mail_verification','token_mail_verification not yet sent').isLength({min:12})
]
exports.add_advanced_userRules=()=>[
    check('age','this field is required').notEmpty().isInt({gt :22}),
    check('phone','this field is required').notEmpty().isInt().isLength(8),
    check('region','this field is required').notEmpty(),
    check('price','this field is required').notEmpty(),
    check('category','this field is required').notEmpty(),
    check('genre','this field is required').notEmpty(),
    check('password','Password should have 6 char at least').isLength({min:6,max:15}),
    check('job','this field is required').notEmpty(),










]

exports.validator=(req,res,next)=>{
    const errors=validationResult(req)
    errors.isEmpty()?next():res.status(400).json({errors:errors.array()})
}