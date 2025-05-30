import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react'; 

import BouncyCheckbox from 'react-native-bouncy-checkbox';
// form validation
import * as Yup from 'yup'
import { Formik } from 'formik'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'should be min of 4 characters')
  .max(16, 'should be max of 16 characters')
  .required('required field')
})

export default function App() {

    const [password, setPassword] = useState('');
    const [isPassGenerated, setIsPassGenerated] = useState(false);

    const [lowerCase, setLowerCase] = useState(true);
    const [upperCase, setUpperCase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);

    const generatePasswordString = (passwordLength:number) => {
      let characterList = '';

      const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowerCaseChars = 'abcddefghijklmnopqrstuvwxyz';
      const digitChars = '0123456789';
      const specialChars = '!@#$%^&*()_+';

      if(upperCase)
      {
        characterList += upperCaseChars;
      }
      if(lowerCase)
      {
        characterList += lowerCaseChars;
      }
      if(numbers)
      {
        characterList += digitChars;
      }
      if(symbols)
      {
        characterList += specialChars;
      }

      const passwordResult = createPassword(characterList, passwordLength);

      setPassword(passwordResult);
      setIsPassGenerated(true);
    };

    const createPassword = (characeters:string, passwordLength:number) => {
      let result = '';
      for(let i = 0; i < passwordLength; i++)
      {
        const characterIndex = Math.round(Math.random() * characeters.length);
        result += characeters.charAt(characterIndex);
      }
      return result;
    };

    const resetPasswordSate = () => {
      setPassword('');
      setIsPassGenerated(false);
      setLowerCase(true);
      setUpperCase(false);
      setNumbers(false);
      setSymbols(false);
    };

  return (
    <ScrollView keyboardShouldPersistTaps={'handled'} style={styles.container}>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
            <Text style={styles.title}> Password Generator</Text>
              <Formik
       initialValues={{ passwordLength: '' }}
       validationSchema={PasswordSchema}
       onSubmit={ values => {
        console.log(values);
        generatePasswordString(Number(values.passwordLength));
       }}
     >
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleBlur,
         handleSubmit,
         handleReset,
         /* and other goodies */
       }) => (
        <>
        <View style={styles.inputWrapper}>
          <View style={styles.inputColumn}>
            <Text style={styles.heading}>Password Length</Text>
            {touched.passwordLength && errors.passwordLength && (
              <Text style={styles.errorText}>
                {errors.passwordLength}
              </Text>
            )}
          </View>
          <TextInput
            style={styles.inputStyle}
            value={values.passwordLength}
            onChangeText={handleChange('passwordLength')}
            placeholder="Ex. 8"
            keyboardType="numeric"
            />
        </View>
        <View style={styles.inputWrapper}>
          <View><Text style={styles.heading}>Include Lower Case</Text></View>
          <View>
            <BouncyCheckbox
          disableBuiltInState
          isChecked={lowerCase}
          onPress={()=>setLowerCase(!lowerCase)}
          fillColor="#6dc365"
          />
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <View><Text style={styles.heading}>Include Upper Case</Text></View>
          <View>
            <BouncyCheckbox
          disableBuiltInState
          isChecked={upperCase}
          onPress={()=>setUpperCase(!upperCase)}
          fillColor="#6dc365"
          />
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <View><Text style={styles.heading}>Include Numbers</Text></View>
          <View>
            <BouncyCheckbox
          disableBuiltInState
          isChecked={numbers}
          onPress={()=>setNumbers(!numbers)}
          fillColor="#6dc365"
          />
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <View><Text style={styles.heading}>Include Symbols</Text></View>
          <View>
            <BouncyCheckbox
          disableBuiltInState
          isChecked={symbols}
          onPress={()=>setSymbols(!symbols)}
          fillColor="#6dc365"
          />
          </View>
        </View>

        <View style={styles.formActions}>
          <TouchableOpacity
          disabled={!isValid}
          style={styles.primaryBtn}
          onPress={handleSubmit}
          >
            <Text style={styles.primaryBtnTxt}>Generate Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={()=>{
              handleReset();
              resetPasswordSate();
            }}
          >
            <Text style={styles.secondaryBtnTxt}>Reset Password</Text>
          </TouchableOpacity>
        </View>
        </>
       )}
              </Formik>
              {isPassGenerated ? (
                <View style={[styles.card, styles.cardElevated]}>
                  <Text style={styles.subTitle}>Result:</Text>
                  <Text style={styles.description}>Long press to copy</Text>
                  <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
                </View>
              ) : null}
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#afdfef',
  },
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
});