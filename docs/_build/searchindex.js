Search.setIndex({docnames:["contribution/contribution","examples/MNIST_example_with_SM","examples/index","examples/pca_to_sm","examples_scripts/index","examples_scripts/plot_ani","examples_scripts/plot_pca","examples_scripts/plot_subspace_pca","examples_scripts/plot_test","examples_scripts/sg_execution_times","examples_scripts/test","getting_started/installation","index","source/cvt","source/cvt.models","source/cvt.utils","source/modules","tutorials/CMSM","tutorials/GDA","tutorials/KMSM-KCMSM","tutorials/LDA","tutorials/MSM","tutorials/PCA","tutorials/SM","tutorials/eGDA","tutorials/getting_started","tutorials/index","tutorials/references","\u958b\u767a\u8005\u30e1\u30e2"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["contribution/contribution.md","examples/MNIST_example_with_SM.rst","examples/index.rst","examples/pca_to_sm.rst","examples_scripts/index.rst","examples_scripts/plot_ani.rst","examples_scripts/plot_pca.rst","examples_scripts/plot_subspace_pca.rst","examples_scripts/plot_test.rst","examples_scripts/sg_execution_times.rst","examples_scripts/test.rst","getting_started/installation.rst","index.rst","source/cvt.rst","source/cvt.models.rst","source/cvt.utils.rst","source/modules.rst","tutorials/CMSM.rst","tutorials/GDA.rst","tutorials/KMSM-KCMSM.rst","tutorials/LDA.rst","tutorials/MSM.rst","tutorials/PCA.rst","tutorials/SM.rst","tutorials/eGDA.rst","tutorials/getting_started.rst","tutorials/index.rst","tutorials/references.rst","\u958b\u767a\u8005\u30e1\u30e2.md"],objects:{"":{cvt:[13,0,0,"-"]},"cvt.models":{base_class:[14,0,0,"-"],cmsm:[14,0,0,"-"],kcmsm:[14,0,0,"-"],kmsm:[14,0,0,"-"],msm:[14,0,0,"-"],sm:[14,0,0,"-"]},"cvt.models.base_class":{ConstrainedSMBase:[14,1,1,""],KernelCSMBase:[14,1,1,""],KernelSMBase:[14,1,1,""],MSMInterface:[14,1,1,""],SMBase:[14,1,1,""]},"cvt.models.base_class.ConstrainedSMBase":{param_names:[14,2,1,""]},"cvt.models.base_class.KernelCSMBase":{param_names:[14,2,1,""]},"cvt.models.base_class.KernelSMBase":{param_names:[14,2,1,""]},"cvt.models.base_class.MSMInterface":{predict_proba:[14,3,1,""],test_n_subdims:[14,3,1,""]},"cvt.models.base_class.SMBase":{fit:[14,3,1,""],get_params:[14,3,1,""],param_names:[14,2,1,""],predict:[14,3,1,""],predict_proba:[14,3,1,""],proba2class:[14,3,1,""],set_params:[14,3,1,""]},"cvt.models.cmsm":{ConstrainedMSM:[14,1,1,""]},"cvt.models.kcmsm":{KernelCMSM:[14,1,1,""]},"cvt.models.kmsm":{KernelMSM:[14,1,1,""]},"cvt.models.kmsm.KernelMSM":{fast_predict_proba:[14,3,1,""]},"cvt.models.msm":{MutualSubspaceMethod:[14,1,1,""]},"cvt.models.sm":{SubspaceMethod:[14,1,1,""]},"cvt.utils":{base:[15,0,0,"-"],evaluation:[15,0,0,"-"],kernel_functions:[15,0,0,"-"]},"cvt.utils.base":{canonical_angle:[15,4,1,""],canonical_angle_matrix:[15,4,1,""],canonical_angle_matrix_f:[15,4,1,""],cross_similarities:[15,4,1,""],dual_vectors:[15,4,1,""],max_square_singular_values:[15,4,1,""],mean_square_singular_values:[15,4,1,""],subspace_bases:[15,4,1,""]},"cvt.utils.evaluation":{calc_eer:[15,4,1,""],calc_er:[15,4,1,""]},"cvt.utils.kernel_functions":{l2_kernel:[15,4,1,""],linear_kernel:[15,4,1,""],rbf_kernel:[15,4,1,""]},cvt:{models:[14,0,0,"-"],utils:[15,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function"},terms:{"0000ff":3,"200m":5,"35s":1,"6_708":27,"\u03b8":3,"\u03d5i":23,"\u304c\u3044\u3044\u304b\u3082\u306d":28,"\u3053\u308c\u3044\u3089\u306a\u3044\u3088\u3046\u306b\u30b3\u30fc\u30c9\u5909\u3048\u308b":1,"\u3057\u306a\u304f\u3066\u3082\u4fdd\u5b58\u3059\u308b\u5ea6\u306b\u81ea\u52d5\u3067\u66f4\u65b0\u3055\u308c\u308b\u958b\u767a\u8005\u30e2\u30fc\u30c9\u7684\u306a":28,"\u305d\u306e\u3046\u3061":28,"\u305d\u308c\u306a\u3089":28,"\u305f\u3060\u9762\u5012\u306a\u306e\u3067":28,"\u3067\u30db\u30b9\u30c6\u30a3\u30f3\u30b0":28,"\u306e\u65b9\u304c\u8868\u73fe\u529b\u8c4a\u304b\u306a\u306e\u3067\u597d\u307e\u3057\u3044":28,"\u3082\u3057\u304f\u306f":28,"\u3082\u3063\u3068\u826f\u3044\u65b9\u6cd5\u304c\u3042\u308c\u3070\u6559\u3048\u3066\u307b\u3057\u3044":28,"\u3092\u4f7f\u3063\u3066\u81ea\u52d5\u5316\u3055\u305b\u308b\u4e88\u5b9a":28,"\u3092\u5b9f\u884c\u3057\u3066\u304b\u3089browser\u3067":28,"\u3092\u958b\u3051\u3070\u826f\u3044\u306f\u305a":28,"\u30d5\u30a1\u30a4\u30eb\u306f":28,"\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3092\u4f7f\u7528":28,"\u30ed\u30fc\u30ab\u30eb\u306e":28,"\u4ed6\u306b\u8cea\u554f\u304c\u3042\u308c\u3070github\u3084slack\u7d4c\u7531\u3067\u9023\u7d61\u304f\u3060\u3055\u3044":28,"\u53c2\u8003\u6587\u732e\u306e\u4f7f\u3044\u65b9\u304c\u5168\u822c\u7684\u306b\u8b0e\u3044":28,"\u5909\u63db\u5f8c\u306e\u30d5\u30a1\u30a4\u30eb\u3068\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u3092\u6b63\u3057\u3044\u30d5\u30a9\u30eb\u30c0\u306b\u5165\u308c\u308b":28,"\u65e5\u672c\u8a9e":0,"\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u306a\u3069\u306e\u9759\u7684\u306a\u3082\u306e\u306f":28,"\u9055\u3044\u304c\u3088\u304f\u308f\u304b\u3089\u3093":28,"boolean":[0,15],"build\u306e\u4e2d\u8eab\u3068read":28,"case":[1,12,23],"class":[1,8,10,12,14,15,23,25],"cos2\u03b8":23,"default":[14,15,28],"docs\u306e\u4e2d\u8eab\u304c\u5b8c\u5168\u4e00\u81f4\u3059\u308b\u308f\u3051\u3067\u306f\u306a\u3055\u305d\u3046":28,"float":15,"function":[1,3,4,5,8,9,10,15,22],"import":[1,3,5,6,7,8,10,11,12],"int":[14,15],"ipynb\u306fnbconvert\u3067":28,"long":1,"md\u306b\u5909\u63db\u3057\u3066\u304b\u3089":28,"new":5,"return":[0,1,3,5,6,7,8,10,14,15],"short":25,"static\u306b\u5165\u308c\u308b":28,"true":[0,1,3,5,6,7,8,10,14,15],"var":[6,7],"while":[8,10],For:[1,3],One:1,PCs:22,That:23,The:[1,3,8,10,14,22,23,27],Then:23,There:[25,28],These:3,Use:1,Uses:1,Using:[3,28],With:[8,10],__doc__:[8,10],__main__:[5,8,10],__name__:[5,8,10],_build:28,_static:[6,7],abov:1,accuraci:[1,3],accuracy_scor:[1,3,11,12],across:14,add_artist:[8,10],add_subplot:1,admin:0,advanc:23,advantag:[1,3],agg:[5,6,7,8],agreement:0,aim:22,air:12,algorithm:[1,3],all:[0,4,8,10,12,23,28],allow:25,alpha:[3,6,7],alreadi:[1,3],also:[1,12,15,22,28],although:1,alwai:12,analysi:[3,4,6,7,9,23,26],angl:[1,3,6,7,8,10,15,23,25],ani:[0,6,7,12,14],anim:[6,7],anoth:3,anti:3,api:[1,3,11,12],append:3,appli:[0,3,23],applic:28,apply_along_axi:7,approach:25,approx:1,approxim:23,arang:[3,5],arcco:3,arctan:[8,10],area:[8,10],argv:5,around:25,arr:7,arrai:[1,6,7,8,10,11,12,14,15],artifici:12,artist:5,ascend:1,ask:0,assert:3,assign:[1,3],assum:[1,3,23],astyp:14,atom:[5,6,7,8],attempt:1,auto:1,avail:1,averag:0,avg:1,avoid:1,ax1:[3,6,7],ax2:[3,6,7],axes:[3,5,22],axhlin:[6,7],axi:[3,6,7,8,10],axs:3,axvlin:[6,7],backend:[5,6,7,8],bad:12,barplot:1,base:[1,12,13,14,16,23,25],base_class:[12,13,16],baseestim:14,basi:[15,23],bbox:[8,10],becaus:[3,28],becom:[3,22,28],been:25,befor:28,begin:22,beginn:2,behavior:28,being:22,belong:15,below:[1,3,4,11,12,22],benefit:1,better:[1,3],between:[1,3,5,15,23,25],beween:15,biggest:15,black:[6,7,8,10],blit:[6,7],blue:[3,6,7,8,10],bool:[14,15],boston:27,both:[1,3],boundari:[1,3,8,10],break_ti:1,brows:28,build:[3,28],bulki:28,cache_s:1,calc:15,calc_basis_vector:15,calc_eer:15,calc_er:15,calcul:[1,6,7,12,15,23],call:[1,5],calucl:1,can:[1,3,6,7,15,22,23,28],cannon:15,cannot:[5,6,7,8],canon:[15,25],canonical_angl:15,canonical_angle_matrix:15,canonical_angle_matrix_f:15,caption:[],captur:[3,22],caution:12,caveat:[1,28],cell:28,center:[4,6,9,12],chang:[3,28],charact:27,check:[12,23],check_random_st:1,choic:1,choos:[1,3],cite:[],clafic:25,class_weight:1,classes_:1,classif:[1,12,25],classifi:[3,12,23,25],classification_report:1,classifiermixin:14,clear:28,clf:[1,3],click:[5,6,7,8,10],cm_bright:3,cmap:[1,3,8,10],cmsm:[12,13,16,25],code:[1,3,4,5,6,7,8,10,11,12,22,28],coef0:1,coincid:[],collabor:28,collect:1,collespond:15,color:[3,6,7,8,10],colormap:[8,10],column:1,com:[3,11,12],command:[11,12],commit:28,common:1,compar:1,comparison:[12,25],complet:28,compon:[0,3,6,7,14,23,26],comput:[1,12,25,27],computervisionlaboratori:[11,12],concept:12,conclus:22,concret:23,condit:22,conduct:[1,3],confus:1,consid:3,consist:23,constant:[1,6,7],constrain:[14,25,26],constrainedmsm:14,constrainedsmbas:14,construct:1,contact:12,contain:[1,12,14,28],content:[12,16,28],contour:[8,10],contourf:3,contribut:12,control:28,convert:[8,10],copi:[11,12],correl:23,correspond:[1,15,25],cos:[3,6,7],cos_sim:3,cosin:12,could:3,count:14,counter:1,cov:[6,7,8,10],covari:[3,4,6,7,9,22],covariance_:[8,10],creat:[3,6,7,28],credit:12,criteria:23,cross:1,cross_similar:15,crucial:1,current:[5,6,7,8],custom:[1,28],cvlab:[5,6,7,8,12],cvlab_toolbox:[5,6,7,8,11,28],cvt:[1,3,11,12],dark:[1,6,7,8,10],data:[0,1,3,8,10,11,12,14,15,22,23],data_typ:15,datafram:1,dataset:[6,7,8,10,12,22],dataset_cov:[8,10],dataset_fixed_cov:[6,7,8,10],dct:3,decis:[1,3,8,10],decision_function_shap:1,decomposit:[6,7],deep:14,def:[0,1,3,5,6,7,8,10],defin:[1,23],degre:[1,8,10],demo:12,demonstr:3,depend:1,depict:22,depth:12,deriv:22,descend:15,describ:25,descript:0,detail:23,detect:1,determin:3,dev:1,develop:25,deviat:[1,8,10],dic:3,dict:14,dictionari:1,differ:[1,3,8,10],difficult:3,digit:1,dim:[6,7,8,10,11,12],dimens:[0,1,3,15,23],dimension:[1,3,22,23,25],diment:14,direct:[3,6,7,22],directli:1,disadvantag:1,discrimin:[3,4,9,22],discriminant_analysi:[3,8,10],disp:1,displai:[1,8,10],dist:3,distanc:[1,3,15,25],distinct:1,distribut:[1,3,22,23,25],doc:[1,6,7,28],docstr:0,doe:[1,3],doi:27,dot:[6,7,8,10],doubl:[8,10],download:[4,5,6,7,8,10],dpi:5,dual:15,dual_vector:15,each:[0,1,5,8,10,12,14,15,23,25],easi:[3,11,12],easili:[1,3],edgecolor:[3,8,10],edit:28,eer:15,effect:[1,25],effici:[1,28],effort:12,eig:[6,7],eig_val:[3,6,7],eig_vec:[3,6,7],eigen:[3,6,7,15,22],eigen_vec:3,eigenbasi:15,eigenvalu:[3,15],eigenvector:[6,7,12,15,22,23],eigh:[3,8,10],either:23,element:15,eleventh:27,elif:[8,10],ell:[8,10],ellips:[8,10],ellipsoid:[4,9],els:[3,5],empower:12,engin:12,english:0,enumer:[8,10],eps:15,equal:[3,15],equat:23,error:15,especi:3,essenc:3,estim:[1,14],evalu:[12,13,16,27],exampl:[2,3,4,5,6,7,8,10,11,12,15],examples_script:9,examples_scripts_jupyt:4,examples_scripts_python:4,except:28,exectut:1,execut:[1,9,28],exhaust:[1,3],exp:15,expens:1,experiment:1,explain:22,explained_vari:0,explan:23,extend:25,extens:[1,25],extrem:28,face:27,facecolor:[8,10],fact:[3,23],fair:1,fals:[0,1,3,6,7,14,15],familiar:22,farg:[6,7],fast_predict_proba:14,faster:3,faster_mod:[1,3,14],featur:[1,3],feel:12,fetch:1,fetch_openml:1,ff0000:3,fig:[1,3,5,6,7,23],fig_index:[8,10],figsiz:[1,6,7,8,10],figur:[1,5,6,7,8,10],figure_:1,file:[5,9],fill:[8,10],filterwarn:[1,3],find:22,first:[3,22],fit:[1,3,8,10,11,12,14,22],five:1,fix:[8,10,23],flow:23,focu:22,fold:1,follow:[0,1,3,22,23,25],fontsiz:[8,10],forev:5,form:14,format:[1,5],format_input:[1,3],formul:22,formula:22,found:[1,22],fps:[6,7],frac:22,frame:[5,6,7],framework:25,free:12,from:[1,2,5,6,7,8,10,11,12,15,23,27,28],fuk14:[23,27],fukui2005fac:25,fukui2014:25,fukui:[12,27],full:[5,6,7,8,10],funcanim:[5,6,7],fundament:3,further:22,furthermor:25,futur:1,fy05:27,g_ratio:1,galleri:[5,6,7,8,10,12,22],gamma:1,gaussian:[6,7,8,10],genchi:27,gener:[1,3,4,5,6,7,8,10,23,25,28],geomspac:[6,7],get:[3,11,12,14],get_dpi:5,get_param:14,get_size_inch:5,ggplot:3,gif:[5,6,7],git:[11,12,28],github:[11,12],give:3,given:[3,14,15],glanc:12,global:[6,7],goal:22,going:3,golden:[1,6,7],good:12,graduat:12,grai:1,grammian:15,greater:1,green:[3,8,10],grei:[8,10],greyscal:1,ground:3,guarante:3,gui:[5,6,7,8],guid:0,hand:1,hard:28,has:[1,8,10,25],hat:23,have:[3,5,14,25],head:1,help:12,here:[1,3,5,6,7,8,10,11,12,22],high:[1,3,25],higher:[3,15],highest:23,highli:[1,28],hiroshi:27,home:[5,6,7,8],host:12,how:[1,3,6,7,28],howev:28,hstack:[8,10],html:28,http:[3,11,12,27,28],hue:1,human:28,hungri:3,hyperparamet:1,ichi:27,ident:23,igm74:[23,27],ignor:[1,3],iijima1974theori:25,iijima:[25,27],iizuka:12,imag:[1,3,25,28],imagemagick:[5,6,7],implement:[1,25],implementaion:1,improv:12,imshow:1,inbal:1,inch:5,includ:1,independ:[15,25],index:[1,12,28],individu:12,infom:1,inform:[12,27],informat:12,init:[6,7],initi:5,inner:15,input:[0,1,3,11,12,14,15,23,25],insert:[1,3],instanc:[1,14],integ:[1,14,15],intellig:[12,27],interest:[12,28],interfac:14,intern:[1,27],interpret:3,interv:[5,6,7],introduc:3,introduct:22,intuit:1,invers:3,invok:1,involv:12,ipynb:[5,6,7,8,10],is_norm:[6,7],isn:[5,6,7],item:[1,3,28],its:[8,10],japanes:25,javascript:28,join:12,jupyt:[4,5,6,7,8,10,28],jupyterlab:28,just:12,kazuhiro:27,kcmsm:[12,13,16],keep:1,ken:27,kernel:[1,14,15,25],kernel_funct:[12,13,16],kernelcmsm:14,kernelcsmbas:14,kernelmsm:[11,12,14],kernelsmbas:14,kmsm:[12,13,16],kneighborsclassifi:1,knn:1,knnc:1,know:3,known:[22,25],l2_kernel:15,lab:[0,12],label:[1,3,5,6,7,11,12,14,15],labelcolor:3,laboratori:12,lambda:[15,22],larger:1,largest:[3,22],later:3,latest:12,latter:14,lda:[8,10],lead:12,leaf_siz:1,learn:[1,8,10,11,12,23,25,27],leav:22,left:1,legend:3,legngth:3,len:[3,5,14],length:[1,3,23],less:1,let:[3,22],like:[1,12,14,15,28],limit:15,linalg:[3,6,7,8,10],line:[5,22],linear:[1,4,9,15],linear_kernel:15,lineardiscriminantanalysi:[3,8,10],linearli:22,linearsegmentedcolormap:[8,10],lineplot:1,linestyl:[6,7],linewidth:[5,8,10],linspac:[3,8,10],list:[1,11,12,14,15],listedcolormap:3,lnq:[6,7],loc:[3,6,7],localhost:28,look:[3,12],loop:[1,5],lot:1,low:3,lower:[3,15,23],m_j:22,machin:[1,12,28],macro:1,made:[12,28],mae10:[22,27],maeda:27,mai:1,mail:12,major:1,make:[0,1,3,22,28],make_circl:3,make_classif:3,make_moon:3,manag:28,mani:[3,22,25,28],manual:28,map:14,marker:[8,10],markeredgecolor:[8,10],markers:[8,10],match:27,mathemat:15,mathutil:15,matplotlib:[1,3,5,6,7,8,10],matric:[8,10],matrix:[0,1,3,6,7,8,10,14,15,22,23],max:3,max_it:1,max_scor:3,max_square_singular_valu:15,maxdepth:[],maxim:22,maximis:[6,7],mayb:1,mean:[1,3,4,6,8,9,10,15,22],mean_square_singular_valu:15,means_:[8,10],measur:25,media:28,melt:1,member:0,memori:1,mention:28,menu:28,merg:0,mesh:3,meshgrid:[3,8,10],method:[2,12,14,26,27],metric:[1,3,11,12,15],metric_param:1,min:3,minim:[4,9],minimum:[1,23,25],minkowski:1,minut:[5,6,7,8,10],mnist:[2,12],mnist_784:1,model:[1,3,11,12,13,16],model_select:[1,3,11,12],modul:[12,16],more:[1,3,25,28],mori:27,most:[1,3,25],motiv:12,mpl:[6,7,8,10],msm:[1,12,13,16,25],msminterfac:14,much:[0,1,3],multi:27,multipl:[25,28],multipli:22,must:1,mutal:26,mutual:[14,25,27],mutualsubspacemethod:14,n_class:[1,11,12,14],n_compon:3,n_dim:[1,14,15],n_dimens:15,n_element:15,n_featur:[0,3],n_gds_dim:14,n_input:15,n_job:1,n_neighbor:1,n_redund:3,n_ref:15,n_sampl:[0,1,3,14,15],n_samples_i:15,n_samples_x:15,n_set:15,n_set_i:15,n_set_x:15,n_subdim:[1,3,11,12,14,15],n_subdim_i:15,n_subdim_x:15,n_subdims_i:15,n_subdims_j:15,n_test:[11,12],n_train:[11,12],n_vector:15,n_vector_set:14,name:[1,14,25],nan:3,natur:25,nbsphinx:28,ncol:[3,6,7],ndarrai:[0,15],nearest:1,need:[1,5],neighbor:1,nest:14,newli:3,next:[1,3],nois:1,nomralis:7,non:[1,5,6,7,8],none:[1,14,15],norm:[3,6,7,8,10],normal:[0,1,3,5,6,7,8,10,14,23],note:[1,5],notebook:[4,5,6,7,8,10],now:3,nrow:[6,7],num:[6,7],number:[1,6,7,14,15],numpi:[0,1,3,5,6,7,8,10,11,12],numpydoc:0,object:14,obscur:28,obtain:[7,22,23],obviou:23,obvious:3,offici:12,often:23,one:[1,12,25,28],ones:[3,8,10],onli:[1,3],onto:[3,22],openml:1,optim:[1,3],option:15,order:15,org:27,origin:[6,7],orthogon:[22,23],orthonorm:23,osamu:27,other:[3,25,28],otherhand:3,our:[3,12,22],out:[6,7,8,23],outlier:1,output:28,over:[1,5],ovr:1,own:[8,10],packag:[3,12,16],page:[1,12,27,28],pairwis:15,panda:1,param:[1,14],param_nam:14,paramet:[0,1,14,15],pardir:[1,3],partial:22,pass:1,past:[11,12],patch:[8,10],path:[1,3],pattern:[1,3,23,25,27],pca:[0,2,4,9,12,15,23],pcolormesh:[8,10],peform:12,pep8:0,per:1,perform:[1,3,6,7,25],persist:[5,6,7],perspect:3,phase:23,phi:[6,7,22],pip:[11,12],pipelin:14,plane:3,pleas:12,plot:[3,6,7,8,10,22,28],plot_ani:5,plot_confusion_matrix:1,plot_data:[8,10],plot_decision_boundari:3,plot_ellips:[8,10],plot_lda_cov:[8,10],plot_pca:[6,9],plot_qda_cov:[8,10],plot_stat:1,plot_subspace_pca:[7,9],plot_test:[8,9],plt:[1,3,5,6,7,8,10],png:3,point:[1,3,22,25],popular:1,posit:[8,10],possibl:[0,1,14],power:[3,25],pre:28,precis:1,pred:[11,12,14],predefin:[6,7],predict:[1,8,10,11,12,14],predict_proba:[3,8,10,14],prepar:12,prerequiset:26,pretti:[11,12],previou:3,princip:[3,22,23],principl:[1,6,7,26],print:[1,3,5,8,10,11,12],proba2class:14,proba:14,probabl:[1,14],problem:3,procedur:[1,3],process:23,product:15,prof:12,program:12,proj1:3,proj2:3,proj_vari:[6,7],project:[3,22,23],properti:14,provid:[1,3,5],pull:0,put:3,pyplot:[1,3,5,6,7,8,10],python:[0,4,5,6,7,8,10,28],q_i:23,qda:[8,10],qdf:22,quadract:1,quadrat:[4,9,22],quadraticdiscriminantanalysi:[8,10],queri:[1,5],question:12,quiver:[3,6,7],rad2deg:3,rad:[6,7],rand:[11,12],randint:[1,11,12],randn:[6,7,8,10],random:[3,5,6,7,8,10,11,12],random_st:1,randomizedsearchcv:1,rang:[1,3,6,7,11,12,14],rate:15,ravel:[3,8,10],rbf:[1,15],rbf_kernel:15,rdbu:3,read:28,reason:28,recal:1,recognit:[23,25,27],recommend:28,red:[3,6,7,8,10],red_blue_class:[8,10],redrawn:5,redrawnstart_deg:[6,7],ref:15,refer:[3,12,15,25],register_cmap:[8,10],regress:1,regular:1,reject:[3,23],relat:3,remeb:1,remov:28,replac:[22,25],replesent:15,repo:12,report:1,repositori:[12,28],repres:[1,3,15,22],represent:15,request:0,research:[12,25,27],reshap:[1,3,8,10],respect:25,restructur:28,result:[3,12],resus:3,return_eigv:15,return_x_i:1,revers:[6,7],review:0,revis:1,rewritten:22,rich:28,robot:27,row:15,rst:28,rtd:12,rule:12,run:[1,5,6,7,8,10,11,12],same:[3,6,7,8,10,22],sampl:[1,6,7,8,10,14,22],satisfi:15,satosi:27,save:[5,6,7],scale:[1,3,6,7],scale_unit:[3,6,7],scatter:[3,5,6,7,8,10,22],school:12,scienc:27,scikit:[1,11,12],scipi:[1,6,7,8,10],score:[1,3],screen:5,script:[5,6,7,8,10],seaborn:[1,3,6,7],search:[1,3,12],second:[3,5,6,7,8,10,22],section:[1,3],see:[1,3,12,22,25,28],seed:[6,7,8,10],select:[12,27,28],self:14,sens:22,separ:5,serv:12,set:[1,3,11,12,14,15,22,23,25],set_alpha:[8,10],set_aspect:3,set_clip_box:[8,10],set_data:[6,7],set_param:14,set_tight_layout:5,set_titl:[3,6,7],set_uvc:[6,7],set_xlabel:[3,5],set_xlim:[3,6,7],set_xtick:[8,10],set_ydata:5,set_ylabel:3,set_ylim:[3,6,7],set_ytick:[8,10],sever:[1,25],shape:[0,3,8,10,14,15],should:[3,11,12,23,28],show:[1,3,5,6,7,8,10],shown:22,shrink:1,sigma:[11,12,14,15],similar:[12,15,23,25],simpl:[1,14,15],simplehttpserv:28,simpli:1,simplic:[1,3],sin:[3,6,7],sinc:1,singl:23,singular:15,size:[3,5,6,7],sklearn:[1,3,8,10,11,12,14,15],slight:1,smbase:14,smc:[1,3],sns:[1,3],solv:[6,7,22],solver:[8,10],some:0,sort:[3,6,7,15],sort_valu:1,sound:28,sourc:[4,5,6,7,8,10,22,28],sp_randint:1,space:[1,3,15,22,25],specifi:1,speed:1,sphinx:[4,5,6,7,8,10,28],splot:[8,10],springer:27,sqrt:15,squar:15,stabl:12,stackoverflow:3,standard:[8,10],start:[1,3,12,25],stat:1,std:1,step:[1,3,6,7],still:1,store:[1,3],store_covari:[8,10],stori:22,string:[14,15],structur:3,student:12,stuff:12,style:[1,3,6,7,12],submodul:[12,13,16],subobject:14,subpackag:[12,16],subplot:[3,5,6,7,8,10],subplots_adjust:[8,10],subset:1,subspac:[2,4,9,12,14,15,26,27],subspace_bas:15,subspace_pca:7,subspacemethod:[1,3,14],suit:1,sum:22,sum_:22,supervis:1,support:12,suppress:1,suptitl:[1,6,7,8,10],survei:25,svc:1,svd:[8,10],svm:1,symbol:[1,3],symmetr:3,symposium:27,sys:[1,3,5],system:[12,27],taizo:27,take:[1,3],taken:0,target:[1,6,7,22],target_phi:[6,7],target_rad:[6,7],task:25,tediou:28,term:1,test:[1,10],test_n_subdim:14,test_siz:1,test_x:3,testset:1,text:28,than:[1,23],thei:3,them:25,theori:27,therefor:[3,23,28],thesi:[5,6,7,8],theta:3,thi:[1,3,5,6,7,8,10,12,14,15,22,23,25,28],think:1,those:28,threashold:15,thresh:15,threshold:23,tick_param:3,tie:3,tight:[8,10],tight_layout:[8,10],time:[1,5,6,7,8,10],timeit:1,timestep:5,tip:3,titl:[1,8,10],toctre:[],toi:3,tol:1,too:3,toolbox:12,top:[8,10,15],total:[5,6,7,8,9,10],tp0:[8,10],tp1:[8,10],tqdm:1,track:1,train:[12,14],train_siz:1,train_test_split:[1,3,11,12],trainset:1,treat:[0,15],truth:3,tsukuba:12,tune:1,tupl:5,tutori:[1,3,12,23],twinx:3,two:[23,25],type:[1,14,15,28],typic:[3,25],uncorrel:22,understand:3,uniform:1,uniqu:[1,3,14],unit:[12,22],unit_vector_from_rad:[6,7],univers:12,unknown:22,updat:[5,6,7,14],update_quiv:[6,7],update_scatt:[6,7],url:27,use:[1,6,7,11,12],used:[1,3,22,23,28],useful:[1,28],userwarn:[5,6,7,8],uses:3,using:[1,3,5,6,7,8,14,15,23,27],usual:22,util:[1,12,13,16],val:[1,6,7],valid:1,valu:[1,14,15,23],vari:[8,10],variabl:[1,14,15,27],varianc:[0,3,6,7,22],variou:12,vec:[6,7],vector:[0,3,7,11,12,14,15,22,23,25],verbos:1,veri:[3,28],versatil:1,version:1,via:12,viewpoint:27,vision:[12,25,27],visual:3,vote:1,wai:3,walkthrough:[12,23],warn:[1,3],wat67:[23,27],watanab:[25,27],watanabe1967evalu:25,web:12,websit:1,weight:1,well:[3,14,25],what:[3,15],when:[0,1,3,5],where:[1,3,15,23,25],which:[1,3,5,6,7,8,12,22,23],white:[8,10],whiten:0,whole:23,why:3,within:1,without:[4,9],won:1,work:[1,3,11,12,14,28],would:12,wrapper:15,write:0,writer:[5,6,7],written:1,x0_fp:[8,10],x0_tp:[8,10],x1_fp:[8,10],x1_tp:[8,10],x_a:22,x_data:[6,7],x_i:22,x_max:[3,8,10],x_min:[3,8,10],x_test:[1,11,12],x_train:[1,11,12],xix:23,xlabel:5,xlim:[3,8,10],y_data:[6,7],y_gt:3,y_max:[3,8,10],y_min:[3,8,10],y_pred:[1,3,8,10],y_test:[1,11,12],y_train:[1,11,12],yamaguchi:27,yellow:[8,10],ylabel:[8,10],ylim:[3,8,10],you:[3,12,28],your:[3,11,12,28],zero:[3,8,10,22],zip:[4,6,7],zorder:[8,10]},titles:["Coding styles","MNIST example with Subspace Method","Tutorials","From PCA to the Subspace Method","Gallery","Just testing how an animated plot turns out","PCA by minimizing the Quadratic Discriminant Function","Subspace PCA (PCA without mean centering)","Linear and Quadratic Discriminant Analysis with covariance ellipsoid","Computation times","Linear and Quadratic Discriminant Analysis with covariance ellipsoid","Installation","Welcome to cvlab_toolbox\u2019s documentation!","cvt package","cvt.models package","cvt.utils package","cvt","Constrained Subspace Method","&lt;no title&gt;","Kernel MSM / Kernel CMSM","&lt;no title&gt;","Mutal Subspace Method","Principle Component Analysis","Subspace Method","&lt;no title&gt;","Subspace Methods at a Glance","Concepts Walkthrough","References","\u958b\u767a\u8005\u30e1\u30e2"],titleterms:{"\u3092\u4f7f\u3046\u3068\u304d\u306e\u8af8\u6ce8\u610f":28,"\u30ed\u30fc\u30ab\u30eb\u3067\u5b9f\u884c\u3059\u308b\u65b9\u6cd5":28,"\u57fa\u672c\u7684\u306a\u3053\u3068":28,"\u8b0e":28,"\u958b\u767a\u8005\u30e1\u30e2":28,"case":3,"class":3,"function":6,analysi:[8,10,22,25],anim:5,bad:3,base:15,base_class:14,calcul:[3,22],center:7,classif:3,classifi:1,cmsm:[14,19],code:0,comparison:1,compon:22,comput:9,concept:26,constrain:17,content:[13,14,15],contribut:0,cosin:3,covari:[8,10],cvlab_toolbox:12,cvt:[13,14,15,16],dataset:[1,3],depth:1,discrimin:[6,8,10],document:12,each:3,eigenvector:3,ellipsoid:[8,10],evalu:15,exampl:1,from:3,galleri:4,glanc:25,good:3,how:5,improv:1,indic:12,instal:[11,12],just:5,kcmsm:14,kernel:19,kernel_funct:15,kmsm:14,linear:[8,10],mean:7,method:[1,3,17,21,23,25],minim:6,mnist:1,model:14,modul:[13,14,15],msm:[14,19],mutal:21,notebook:28,out:5,packag:[13,14,15],pca:[3,6,7,22],peform:3,plot:5,prepar:[1,3],principl:22,quadrat:[6,8,10],refer:27,result:1,rule:0,select:3,similar:3,style:0,submodul:[14,15],subpackag:13,subspac:[1,3,7,17,21,23,25],support:1,tabl:12,test:5,theori:23,time:9,train:[1,3],turn:5,tutori:2,use:3,util:15,vector:1,walkthrough:26,welcom:12,without:7}})