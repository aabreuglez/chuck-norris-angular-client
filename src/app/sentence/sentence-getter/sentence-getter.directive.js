import angular from 'angular';

export default function sentenceGetter(){	
	return {
		restrict : 'E',
		template: require('./sentence-getter.tpl.html'),
		controller: 'SentenceGetterController',
		controllerAs: 'sentenceGetter'
	}
}