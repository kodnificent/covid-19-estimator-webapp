/**
 * Validate form data against a set of rules
 * 
 * @param {object} data formData to validate against a set of rules
 * @param {array} rules An array of rules to validate
 * @return {array}
 */
export const validatejs = (data, rules)=>{
    const errors = [];

    rules.forEach(rule => {

        let value = data.get(rule.attr);

        rule.rule.some(constraint=>{
            if(constraint === 'required'){
                let error_msg = requiredConstraint(value, (msg)=> msg);
                if(error_msg){
                    errors.push({
                        attr: rule.attr,
                        msg: error_msg,
                    });

                    return true;
                }
            } else if(typeof constraint === 'function'){
                let error_msg = constraint(value, (msg)=> msg);
                if(error_msg){
                    errors.push({
                        attr: rule.attr,
                        msg: error_msg,
                    });

                    return true;
                }
            }
        });
    });

    return errors;
};

const requiredConstraint = (value, fail) =>{
    if(value === null || value == ''){
        return fail('Required');
    }
}