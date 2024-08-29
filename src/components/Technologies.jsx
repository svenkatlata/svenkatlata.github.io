import React from 'react'
import pythonLogo from '../assets/technologies/Python.svg'
import djangoLogo from '../assets/technologies/Django.svg'
import djangorestLogo from '../assets/technologies/Django_REST.svg'
import flaskLogo from '../assets/technologies/Flask.svg'
import postgresqlLogo from '../assets/technologies/PostgreSQL.svg'
import mongodbLogo from '../assets/technologies/MongoDB.svg'
import reactLogo from '../assets/technologies/React.svg'
import tailwindcssLogo from '../assets/technologies/Tailwind_CSS.svg'
import awsLogo from '../assets/technologies/AWS.svg'
import numpyLogo from '../assets/technologies/NumPy.svg'
import pandasLogo from '../assets/technologies/Pandas.svg'
import matplotlibLogo from '../assets/technologies/Matplotlib.svg'
import seabornLogo from '../assets/technologies/Seaborn.svg'
import scipyLogo from '../assets/technologies/SCIPY.svg'
import scikitlearnLogo from '../assets/technologies/scikit-learn.svg'
import statsmodelsLogo from '../assets/technologies/Statsmodels.svg'
import tensorflowLogo from '../assets/technologies/TensorFlow.svg'
import pytorchLogo from '../assets/technologies/PyTorch.svg'
import kerasLogo from '../assets/technologies/Keras.svg'
import spacyLogo from '../assets/technologies/SpaCy.svg'

const Technologies = () => {
  return (
    <div id="technologies" className="p-8 xl:px-20 xl:pt-0 xl:pb-16">
        <h2 className="my-20 text-center lg:text-4xl text-3xl font-light">
            <span className="text-theme-dark-blue">Technologies</span>
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 p-2">
            <div className="rounded-2xl p-6 border-2 border-neutral-200 shadow-md">
                <img src={pythonLogo} alt="Python" className="h-16 w-16" />
            </div>
            <div className="rounded-2xl p-6 border-2 border-neutral-200 shadow-md">
                <img src={djangoLogo} alt="Django" className="h-16 w-16" />
            </div>
            <div className="rounded-2xl p-6 border-2 border-neutral-200 shadow-md">
                <img src={djangorestLogo} alt="Django Rest Framework" className="h-16 w-16" />
            </div>
            <div className="rounded-2xl p-6 border-2 border-neutral-200 shadow-md">
                <img src={flaskLogo} alt="Flask" className="h-16 w-16" />
            </div>
            <div className="rounded-2xl p-6 border-2 border-neutral-200 shadow-md">
                <img src={postgresqlLogo} alt="PostgreSQL" className="h-16 w-16" />
            </div>
            <div className="rounded-2xl p-6 border-2 border-neutral-200 shadow-md">
                <img src={mongodbLogo} alt="MongoDB" className="h-16 w-16" />
            </div>
            <div className="rounded-2xl p-6 border-2 border-neutral-200 shadow-md">
                <img src={reactLogo} alt="React.js" className="h-16 w-16" />
            </div>
            <div className="rounded-2xl p-6 border-2 border-neutral-200 shadow-md">
                <img src={tailwindcssLogo} alt="Tailwind CSS" className="h-16 w-16" />
            </div>
            <div className="rounded-2xl p-6 border-2 border-neutral-200 shadow-md">
                <img src={awsLogo} alt="AWS" className="h-16 w-16" />
            </div>
            <div className="rounded-2xl p-6 border-2 border-neutral-200 shadow-md">
                <img src={numpyLogo} alt="Numpy" className="h-16 w-16" />
            </div>
            <div className="rounded-2xl p-6 border-2 border-neutral-200 shadow-md">
                <img src={pandasLogo} alt="Pandas" className="h-16 w-16" />
            </div>
            <div className="rounded-2xl p-6 border-2 border-neutral-200 shadow-md">
                <img src={matplotlibLogo} alt="Matplotlib" className="h-16 w-16" />
            </div>
            <div className="rounded-2xl p-6 border-2 border-neutral-200 shadow-md">
                <img src={seabornLogo} alt="Seaborn" className="h-16 w-16" />
            </div>
            <div className="rounded-2xl p-6 border-2 border-neutral-200 shadow-md">
                <img src={scipyLogo} alt="Scipy" className="h-16 w-16" />
            </div>
            <div className="rounded-2xl p-6 border-2 border-neutral-200 shadow-md">
                <img src={scikitlearnLogo} alt="Scikit-Learn" className="h-16 w-16" />
            </div>
            <div className="rounded-2xl p-6 border-2 border-neutral-200 shadow-md">
                <img src={statsmodelsLogo} alt="Statsmodels" className="h-16 w-16" />
            </div>
            <div className="rounded-2xl p-6 border-2 border-neutral-200 shadow-md">
                <img src={tensorflowLogo} alt="Tensorflow" className="h-16 w-16" />
            </div>
            <div className="rounded-2xl p-6 border-2 border-neutral-200 shadow-md">
                <img src={pytorchLogo} alt="Pytorch" className="h-16 w-16" />
            </div>
            <div className="rounded-2xl p-6 border-2 border-neutral-200 shadow-md">
                <img src={kerasLogo} alt="Keras" className="h-16 w-16" />
            </div>
            <div className="rounded-2xl p-6 border-2 border-neutral-200 shadow-md">
                <img src={spacyLogo} alt="Spacy" className="h-16 w-16" />
            </div>
        </div>
    </div>
  )
}

export default Technologies