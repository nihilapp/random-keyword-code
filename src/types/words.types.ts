export interface INihilOrga {
  name: string;
  description: string;
}

export interface INihilArea {
  지역: string[];
  '드라스 섬': string[];
  '발라큐아 섬': string[];
  '엘카우스 섬': string[];
  '셀레오르 섬': string[];
  '철벽 섬': string[];
  '바르기스 대륙': string[];
  '유센티아 대륙': string[];
  '바르기스 해': string[];
  '네프네린 해': string[];
  '아란티아 해': string[];
  '리자루스 해': string[];
  '고르고니아 제국': string[];
  '드라코니아 왕국': string[];
  '신 제국': string[];
  '강철 제국': string[];
  '리자루스 제도': string[];
  '썩은 고원': string[];
  '검은 협곡': string[];
  '하얀 숲': string[];
  '베마로스 해': string[];
  '조각 섬': string[];
  '배들의 무덤': string[];
  [name: string]: string[];
}

export interface IOtherMinor {
  name: string;
  description: string;
}
