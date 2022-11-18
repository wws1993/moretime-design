import React, { useContext } from 'react';
import { context, AnchorLink } from 'dumi/theme';
import Table from 'dumi-theme-default/src/builtins/Table';

type TParams = {
  /** 关键字 */
  keyword: string;
  /** 类型 */
  type?: string;
  /** 简述 */
  description?: string;
  /** 是否必填 */
  required?: boolean;
  /** 默认值 */
  default?: any;
}[]

const LOCALE_TEXTS = {
  'zh-CN': {
    name: '属性名',
    description: '描述',
    type: '类型',
    default: '默认值',
    required: '(必选)',
  },
  'en-US': {
    name: 'Name',
    description: 'Description',
    type: 'Type',
    default: 'Default',
    required: '(required)',
  },
};

export default ({ params, title }: { params: string, title?: string }) => {
  const fmt = params?.replace(/\\n/g, '')
  const Apis: TParams = eval(fmt)

  const { locale } = useContext(context);
  const texts = /^zh|cn$/i.test(locale || '') ? LOCALE_TEXTS['zh-CN'] : LOCALE_TEXTS['en-US'];

  return <>
    {Apis && <div className='markdown'>
      {/* <h2 id="api">
        <AnchorLink to='#api' aria-hidden="true" tabIndex={-1}>
          <span className="icon icon-link"></span>
        </AnchorLink>
        {(title || 'api').toUpperCase()}
      </h2> */}

      <Table>
        <thead>
          <tr>
            <th>{texts.name}</th>
            <th>{texts.description}</th>
            <th>{texts.type}</th>
            <th>{texts.default}</th>
          </tr>
        </thead>
        <tbody>
          {Apis.map((row, rowIdx) => (
            <tr key={rowIdx}>
              <td>{row.keyword}</td>
              <td>{row.description || '--'}</td>
              <td>
                <code>{row.type}</code>
              </td>
              <td>
                <code>{row.default || (row.required && texts.required) || '--'}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>}
  </>
}
