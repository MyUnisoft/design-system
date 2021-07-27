import _get from 'lodash/get';
import I18n from '../assets/I18n';

// Constants
export const VALIDATION_STATES_BF = {
  AF: 'to_do',
  AV: 'to_validate',
  EC: 'running',
  NV: 'ko',
  V: 'ok'
};
export const VALIDATION_STATES_FB = {
  to_do: 'AF',
  to_validate: 'AV',
  running: 'EC',
  ko: 'NV',
  ok: 'V'
};

export const VALIDATION_TYPES_BF = {
  VCOL: 'valid_collab',
  VRM: 'valid_rm',
  VAUT: 'valid_aut'
};
export const VALIDATION_TYPES_FB = {
  valid_collab: 'VCOL',
  valid_rm: 'VRM',
  valid_aut: 'VAUT'
};

export const SUMMARY_SECTION = {
  id_section_analytique: -1,
  value: -1,
  label: I18n.t('dadp.summary')
};

// Utils
export const formatReview = review => ({
  ...review,
  type: review.type.code
});

export const commentsWrap = data => ({
  label: I18n.t('dadp.cycle_summary'),
  data
});

export const updateSummary = (section_code, cycle_id, comments, data) => ({
  ...data,
  children: data?.children?.map((section) => {
    if (section.section_code === section_code) {
      return {
        ...section,
        data: section.data.map((cycle) => {
          if (cycle.cycle_id === cycle_id) {
            return {
              ...cycle,
              data: comments
            };
          }

          return cycle;
        })
      };
    }

    return section;
  })
});

export const evolGroupValidation = (prev_state, new_state, group_state) => {
  if ((new_state === 'ko') || (prev_state !== 'ko' && group_state === 'ko')) {
    return 'ko';
  }

  if ((prev_state === 'to_do' || prev_state === 'to_validate' || prev_state === 'ok')
    && new_state === 'running' && group_state !== 'ko') {
    return 'running';
  }

  if ((prev_state === 'to_do' || prev_state === 'to_validate')
    && (new_state === 'to_do' || new_state === 'to_validate')) {
    return group_state;
  }

  return null;
};

export const groupValidationState = (type, children) => {
  if (children.length === 0) return null;

  const states = {
    to_do: 0,
    to_validate: 0,
    running: 0,
    ko: 0,
    ok: 0
  };

  children.forEach((child) => { states[child[type]] += 1; });

  if (states.ko > 0) return 'ko';
  if ((states.to_do + states.to_validate) === children.length) {
    if (states.to_do > 0) return 'to_do';
    return 'to_validate';
  }
  if (states.ok === children.length) return 'ok';

  return 'running';
};

export const formatDiligence = (diligence) => {
  const children = _get(diligence, 'children.diligence_list', [])
    .filter(child => child.diligence_id != null);

  return {
    ...diligence,

    diligence_id: diligence.ref_id,
    valid_collab: groupValidationState('valid_collab', children),
    valid_rm: groupValidationState('valid_rm', children),

    children: children
      .map(child => (
        {
          ...child, parent_id: diligence.ref_id, parent_ref: diligence.ref
        }
      ))
  };
};

export const updateDiligences = (id, vtype, vstate) => (diligence) => {
  const result = {
    ...diligence,

    children: diligence.children.map((child) => {
      if (child.diligence_id === id) {
        return {
          ...child,
          [vtype]: vstate
        };
      }

      return child;
    })
  };

  result.valid_collab = groupValidationState('valid_collab', result.children);
  result.valid_rm = groupValidationState('valid_rm', result.children);

  return result;
};

export const bulkUpdateDiligences = updates => (diligence) => {
  const result = {
    ...diligence,

    children: diligence.children.map((child) => {
      const update = updates.find(u => u.diligence_id === child.diligence_id);

      if (update) {
        return {
          ...child,
          [update.validation_type]: update.validation_state
        };
      }

      return child;
    })
  };

  result.valid_collab = groupValidationState('valid_collab', result.children);
  result.valid_rm = groupValidationState('valid_rm', result.children);

  return result;
};

export const updateAccount = (id, vtype, vstate) => (account) => {
  if (account.account_id === id) {
    return {
      ...account,
      [vtype]: vstate
    };
  }

  return account;
};

export const getCategory = (route) => {
  let category;

  switch (route) {
  case 'da_balanceSheet':
    category = 'DA';
    break;
  case 'da_statusPending':
    category = 'DA';
    break;
  case 'da_newSituation':
    category = 'DA';
    break;
  default:
    category = 'DP';
    break;
  }

  return category;
};

/**
 * @param {array with dadp rewies} rewiews
 * @param {array with exercises } exercises
 * @param {*} defaultDossierRevisionId
 * @description set dossierRevisionId with rewiew coresponding period
 *              with first non closed execises
 */
export const setDossierRevisionId = (rewiews, exercices, defaultDossierRevisionId) => {
  if (!(exercices && rewiews && exercices.length && rewiews.length)) {
    return defaultDossierRevisionId;
  }
  const notClosedYear = exercices.find(i => i.closed === false);
  const dossierRevision = rewiews.find(i => i.start_date
    === notClosedYear.start_date && i.end_date === notClosedYear.end_date);
  if (dossierRevision) {
    const { id_dossier_revision } = dossierRevision;
    return id_dossier_revision;
  }
  return defaultDossierRevisionId;
};

export const createUpdatesForValidation = (
  children,
  validation_type,
  validation_state
) => children.map(
  item => ({ diligence_id: item.diligence_id, validation_type, validation_state })
);

export const formatPlaquetteCode = payload => Object.keys(payload)
  .map(key => ({
    code: key,
    checked: payload[key]  
  }));